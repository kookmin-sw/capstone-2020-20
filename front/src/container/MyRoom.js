import React, { Component, Fragment } from 'react';

import Header from "../components/Header";
import Invitaion from "../components/Invitaion";
import Room_card from "../components/Room_card";
import Plus_card from '../components/Plus_card';

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
                        <Plus_card></Plus_card>
                        <div class="paging">
                            <a href="#" class="direction prev"><span>이전</span></a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <strong>5</strong>
                            <a href="#" class="direction next"><span>다음</span></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default MyRoom;

