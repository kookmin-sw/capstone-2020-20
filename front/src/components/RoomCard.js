import React from 'react'
import '../css.css';
import { Link } from "react-router-dom";



const RoomCard = () => {

    return (
        <div className="room_card">

            <div className="room_main">
                <div className="room_color"></div>
                <div className="room_name">
                    20조
                </div>
            </div>
            <div className="room_body">
                <div className="room_member">
                    이지훈님 외 1명
                </div>
                <div className="room_desc">
                    20조 입니다.
                 </div>
            </div>

            <div className = "room_foot">

            <Link className="sign" to="/inroom" >입장하기</Link>
            </div>

        </div>
    )
}

export default RoomCard; 