import React, { Fragment, useContext, useEffect } from 'react';

import Cookies from 'js-cookie';
import axios from "axios";

import RoomContext from '../context/RoomContext';
import Header from "../components/Header";
import Invitation from "../components/Invitation";
import RoomCard from "../components/RoomCard";
import PlusCard from '../components/PlusCard';

const MyRoom = () => {

    const { myroomInfo, setMyroomInfo } = useContext(RoomContext)

    // useEffect(() => {
    //     axios.get("http://localhost:8080/user/load?page=0", { headers: { Authorization: Cookies.get('token') } })
    //     .then((res) => {
    //         setMyroomInfo(res.data)
    //     }).catch((err) => console.log(err));
    // },[])

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
            }

        </Fragment>
    )

}



export default MyRoom;

