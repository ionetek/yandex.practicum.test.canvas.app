import {useEffect,useRef, useState } from "react";
import { useSearchParams} from "react-router-dom";
import React from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux';
import { updateTable } from "./TableSlice";
import {createPlayers, shiftSeats} from "./CanvasMethods";

//Подключаемся
const socket = io("http://localhost:3001/",{ transports: ["websocket"] });

//РЕГИСТРИРУЕМ ИГРОКА
const register = (name) => {
    socket.emit("register", name);
}
//ЗАХОДИМ НА СТОЛ
const enterRoom = (tableId) => {
    socket.emit("enterRoom", tableId);
}

//САДИМСЯ ЗА СТОЛ
const sitOnTheTable = (seatId) => {
    socket.emit("sitOnTheTable", { seat: seatId, tableId: 1, chips: 400 } );
}




const Table = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    let currentUserName = searchParams.get("name");
    const dispatch = useDispatch();

    //ПОЛУЧАЕМ TABLE DATA
    socket.on("table-data", (data) => {
        console.log(data);
        dispatch(updateTable(data));

    });

    const table = useSelector((state) => state.table.data);

    const canvasRef = useRef(null);


    //ОТРИСОВЫВАЕМ ПОЛЬЗОВАТЕЛЯ ЗА СТОЛОМ
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        createPlayers(table,currentUserName, ctx);
    },[table]);

    useEffect(()=> {
        register(currentUserName);
        enterRoom(1);
    },[]);



    const seats = [0,1,2,3];

    const isOnTheTable = table.seats.some( seat => {
        if (seat) {
            return seat.name === currentUserName;
        }
    });

    console.log(isOnTheTable);

    return (
        <>
            <div className="table-wrapper">
                <canvas ref={canvasRef} width="2560" height="1320" id="table"/>
                {seats.map(seatId => (
                    table.seats[seatId] || isOnTheTable
                        ? ''
                        : (<div key={seatId} className={ `seat seat-${seatId}`} onClick={() => sitOnTheTable(seatId)}>Seat<br/> open</div> )

                ))}
            </div>
            <h2 className="text-white">{ currentUserName }</h2>
        </>

    );


}

export default Table;