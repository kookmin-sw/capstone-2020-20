import React, { Fragment, useContext } from 'react';

import Cookies from 'js-cookie';

import Header from "../components/Header";
import Invitation from "../components/Invitation";
import RoomCard from "../components/RoomCard";
import PlusCard from '../components/PlusCard';
import MyRoomContext from '../context/MyRoomContext';

const MyRoom = () => {

    const { isLogged, setIsLogged } = useContext(MyRoomContext);

    /** 
    const r = async() => {
        await Axios.get("http://211.208.115.66:20000/user/load?page=0", {headers: {Authorization: myRoomInfo.token}})
        .then((res)=> console.log(res));
    }

    r();
    */

    return (
        <Fragment>
            {Cookies.get("token") ? 
            <Fragment>
            <Header isLogged = {true}></Header>
            <div className="MyRoom_wrapper">
                <div className="Invitation_container">
                    <Invitation></Invitation>
                </div>

                <div className="List_container">
                    <RoomCard></RoomCard>
                    <RoomCard></RoomCard>
                    <PlusCard></PlusCard>
                    <div className="paging">
                        <a href="!#" className="direction prev"><span>이전</span></a>
                        <a href="!#" >1</a>
                        <a href="!#" >2</a>
                        <a href="!#" >3</a>
                        <a href="!#" >4</a>
                        <strong>5</strong>
                        <a href="!#" className="direction next"><span>다음</span></a>
                    </div>
                </div>
            </div>
            </Fragment>
            :
            <Fragment>
            <Header isLogged = {true}></Header>
            <div className="MyRoom_wrapper">
                <div className="Invitation_container">
                    {/* <Invitation></Invitation> */}
                </div>

                <div className="List_container">    
                    <PlusCard></PlusCard>
                    {/* <div className="paging">
                        <a href="!#" className="direction prev"><span>이전</span></a>
                        <a href="!#" >1</a>
                        <a href="!#" >2</a>
                        <a href="!#" >3</a>
                        <a href="!#" >4</a>
                        <strong>5</strong>
                        <a href="!#" className="direction next"><span>다음</span></a>
                    </div> */}
                </div>
            </div>
            </Fragment>}
            
        </Fragment>
    )
    
}



export default MyRoom;

