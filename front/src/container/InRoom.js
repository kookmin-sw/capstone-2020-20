import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import InRoomContent from "../components/InRoomContent";

const InRoom = () => {

    return (
        <Fragment>
            <Header isLogged={true}></Header>
            <InRoomContent></InRoomContent>
        </Fragment>
    )

}



export default InRoom;

