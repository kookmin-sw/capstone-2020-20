import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import NoticeContent from "../components/NoticeContent";

const NoticeBox = () => {

    return (
        <Fragment>
            <Header isLogged={true}></Header>
            
            <NoticeContent></NoticeContent>
        </Fragment>
    )

}



export default NoticeBox;