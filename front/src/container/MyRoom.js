import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import Room_Invited from "../components/Invitaion";
import Room_card from "../components/Room_card";

class MyRoom extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="MyRoom_wrapper">
                    <div className="Invitation_container">
                    </div>

                    <div className="List_container">
                        <Room_card></Room_card>
                        <Room_card></Room_card>
                        <Room_card></Room_card>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default MyRoom;

