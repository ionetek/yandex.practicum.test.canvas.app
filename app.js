console.log('App.js RUN');
import { Server } from "socket.io";
import Table from "./poker_modules/table.js";
import Player from "./poker_modules/player.js";

const io = new Server(3001);

const players = [];
const tables = [];
const eventEmitter = function( tableId ) {
    return function ( eventName, eventData ) {
        io.sockets.in( 'table-' + tableId ).emit( eventName, eventData );
    }
}

//CREATE TABLES
tables[0] = new Table( 0, 'Sample 10-handed Table', eventEmitter(0), 10, 2, 1, 200, 40, false );
tables[1] = new Table( 1, 'Sample 4-handed Table', eventEmitter(1), 4, 4, 2, 400, 80, false );
tables[2] = new Table( 2, 'Sample 2-handed Table', eventEmitter(2), 2, 8, 4, 800, 160, false );
tables[3] = new Table( 3, 'Sample 6-handed Private Table', eventEmitter(3), 6, 20, 10, 2000, 400, true );

io.on("connection", (socket) => {
    socket.emit('table-data',tables[1].public);

    socket.on('register', function( newScreenName ) {

        // If a new screen name is posted
        if( typeof newScreenName !== 'undefined' ) {
            var newScreenName = newScreenName.trim();
            // If the new screen name is not an empty string
            if( newScreenName && typeof players[socket.id] === 'undefined' ) {
                var nameExists = false;
                for( var i in players ) {
                    if( players[i].public.name && players[i].public.name == newScreenName ) {
                        nameExists = true;
                        break;
                    }
                }

                //Проверка на существование пользователя
                if( !nameExists ) {
                    // Creating the player object
                    players[socket.id] = new Player( socket, newScreenName, 1000 );
                    socket.emit({ 'success': true, screenName: newScreenName, totalChips: players[socket.id].chips });
                    //callback( { 'success': true, screenName: newScreenName, totalChips: players[socket.id].chips } );
                } else {
                    socket.emit({ 'success': false, 'message': 'This name is taken' });
                    //callback( { 'success': false, 'message': 'This name is taken' } );
                }
            } else {
                socket.emit({ 'success': false, 'message': 'Please enter a screen name' });
                //callback( { 'success': false, 'message': 'Please enter a screen name' } );
            }
        } else {
            socket.emit({ 'success': false, 'message': '' });
            //callback( { 'success': false, 'message': '' } );
        }
        console.log('REGISTER', newScreenName);
    });

    socket.on('enterRoom', function( tableId ) {
        if( typeof players[socket.id] !== 'undefined' && players[socket.id].room === null ) {
            // Add the player to the socket room
            socket.join( 'table-' + tableId );
            // Add the room to the player's data
            players[socket.id].room = tableId;
            socket.emit( players[socket.id].room );
        }
    });

    socket.on('sitOnTheTable', function( data ) {
        if(
            // A seat has been specified
            typeof data.seat !== 'undefined'
            // A table id is specified
            && typeof data.tableId !== 'undefined'
            // The table exists
            && typeof tables[data.tableId] !== 'undefined'
            // The seat number is an integer and less than the total number of seats
            && typeof data.seat === 'number'
            && data.seat >= 0
            && data.seat < tables[data.tableId].public.seatsCount
            && typeof players[socket.id] !== 'undefined'
            // The seat is empty
            && tables[data.tableId].seats[data.seat] == null
            // The player isn't sitting on any other tables
            && players[socket.id].sittingOnTable === false
            // The player had joined the room of the table
            && players[socket.id].room === data.tableId
            // The chips number chosen is a number
            && typeof data.chips !== 'undefined'
            && !isNaN(parseInt(data.chips))
            && isFinite(data.chips)
            // The chips number is an integer
            && data.chips % 1 === 0
        ){
            // The chips the player chose are less than the total chips the player has
            if( data.chips > players[socket.id].chips )
                socket.emit( { 'success': false, 'error': 'You don\'t have that many chips' } );
                //callback( { 'success': false, 'error': 'You don\'t have that many chips' } );
            else if( data.chips > tables[data.tableId].public.maxBuyIn || data.chips < tables[data.tableId].public.minBuyIn )
                socket.emit( { 'success': false, 'error': 'The amount of chips should be between the maximum and the minimum amount of allowed buy in' } );
                //callback( { 'success': false, 'error': 'The amount of chips should be between the maximum and the minimum amount of allowed buy in' } );
            else {
                // Give the response to the user
                socket.emit( { 'success': true } );
                //callback( { 'success': true } );
                // Add the player to the table
                tables[data.tableId].playerSatOnTheTable( players[socket.id], data.seat, data.chips );
            }
        } else {
            // If the user is not allowed to sit in, notify the user
            socket.emit( { 'success': false } );
            //callback( { 'success': false } );
        }
    });

    socket.on('disconnect', function() {


        // If the socket points to a player object
        if( typeof players[socket.id] !== 'undefined' ) {
            // If the player was sitting on a table
            if( players[socket.id].sittingOnTable !== false && typeof tables[players[socket.id].sittingOnTable] !== 'undefined' ) {
                // The seat on which the player was sitting
                var seat = players[socket.id].seat;
                console.log('LEFT SEAT',seat);
                // The table on which the player was sitting
                var tableId = players[socket.id].sittingOnTable;
                console.log('TABLE ID',tableId);
                // Remove the player from the seat
                tables[tableId].playerLeft( seat );
            }
            // Remove the player object from the players array
            delete players[socket.id];
        }
        socket.emit('table-data',tables[1].public);
    });

});