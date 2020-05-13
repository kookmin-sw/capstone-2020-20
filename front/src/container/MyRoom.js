import React, { Fragment } from 'react';

import Cookies from 'js-cookie';
import axios from "axios";

import Header from "../components/Header";
import Invitation from "../components/Invitation";
import RoomCard from "../components/RoomCard";
import PlusCard from '../components/PlusCard';

const MyRoom = () => {

    const myroomInfo = async () => {
        await axios.get("http://localhost:8080/user/load?page=0", { headers: { Authorization: Cookies.get('token') } })
            .then((res) => {
                console.log(res.data)
            }).catch((err) => console.log(err));
    }
    myroomInfo();



    return (
        <Fragment>
            {Cookies.get("token") ?
                <Fragment>
                    <Header></Header>
                    <div className="MyRoom_wrapper">
                        <div className="Invitation_container">
                            {/* <Invitation></Invitation> */}
                        </div>

                        <div className="List_container">
                            <PlusCard></PlusCard>
                        </div>
                    </div>
                </Fragment>

                :
                <div></div>
            }

        </Fragment>
    )

}



export default MyRoom;

