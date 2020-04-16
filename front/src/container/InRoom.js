import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import User from "../components/User";
import Content from "../components/Content";

class InRoom extends Component {
    render() {
        return (
            <Fragment>
            <Header></Header>
            <div className="InRoom_wrapper">

                <div className="left_nav">
                    <User></User>
                    <Content></Content>
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
}



export default InRoom;

