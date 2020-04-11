import React, { Component, Fragment } from 'react';

import Header from "../components/Header";

class InRoom extends Component {
    render() {
        return (
            <Fragment>
            <Header></Header>
            <div className="InRoom_wrapper">

                <div className="left_nav">
                    <div className="user">

                    </div>
                    <div className="content_list">

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
}



export default InRoom;

