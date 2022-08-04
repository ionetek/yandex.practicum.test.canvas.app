import { playerPositions } from "./parameters";

//Метод, перемещающий игроков так, чтобы мы были внизу посередине
export const shiftSeats = (table, currentUserName) => {
    let allSeats = [];
    //Место нашего игрока
    let ourSeat = null;
    for (let i =0; i < table.seatsCount; i++) {
        if (table.seats[i]) {
            allSeats.push(table.seats[i]);
            //Определяем наше место
            if (table.seats[i].name === currentUserName) {
                ourSeat = i;
            }
        } else {
            allSeats.push(null);
        }
    }
    //Если мы сидим за столом, то перемещаем массив игроков так, чтобы мы были в 0 позиции
    if (ourSeat) {
        allSeats = [].concat(allSeats.slice(ourSeat),allSeats.slice(0,ourSeat));
    }

    return allSeats;

}

export const createPlayers = (table, currentUserName, ctx) => {
    if (table.seats) {

        //Смещаем сидения так, чтобы наше было внизу посередине
        let seats = shiftSeats(table, currentUserName);

        seats.forEach((seat, id)=> {
            if (seat !== null) {
                ctx.beginPath();
                /*
                ctx.arc(playerPositions[id][0], playerPositions[id][1], 100, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.fill();
                ctx.lineWidth=5;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.stroke();*/
                ctx.rect(playerPositions[id][0]-150, playerPositions[id][1]-50, 300, 100);


                ctx.lineJoin = 'round';
                ctx.lineWidth=5;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';

                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.fill();

                ctx.stroke();

                //Text
                ctx.font = "32px Arial";
                ctx.fillStyle = "#FFE4AF";
                ctx.textAlign = "center";
                ctx.fillText(seat.name, playerPositions[id][0], playerPositions[id][1]-7);
                ctx.fillStyle = "#FFF";
                ctx.fillText('$ '+seat.chipsInPlay, playerPositions[id][0], playerPositions[id][1]+30);
                ctx.closePath();
            }

        });
    }
};