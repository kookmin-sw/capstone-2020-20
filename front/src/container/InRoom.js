import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import InRoomContent from "../components/InRoomContent";

const InRoom = () => {

    return (
        <Fragment>
            <Header isLogged={true}></Header>
            <div className="InRoom_wrapper">

                <div className="left_nav">
                    <div className = "aboutRoom">

                    </div>
                </div>

                <div className="room_content">
                    <div className="chat">

                    </div>
                    <div className="notice">

                    </div>
                    <div className="file">

                    </div>
                </div>

            </div>
        </Fragment>
    )

}



export default InRoom;

