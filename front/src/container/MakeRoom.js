import React, { Fragment, useRef } from 'react';
import '../css.css';
import axios from "axios";

import Logo from '../images/Rooom_Logo.png';

const Login = (props) => {

    const roomNameRef = useRef();
    const roomDescRef = useRef();
    const roomColorRef = useRef();

    const onMakeRoom = async (e) => {
        e.preventDefault();

        const roomName = roomNameRef.current.value
        const roomDesc = roomNameRef.current.value
        const roomColor = roomColorRef.current.value

        let formData = new FormData();

        formData.append("roomName", roomName)
        formData.append("roomDesc", roomDesc)
        formData.append("roomColor", roomColor)

        console.log(roomName)
        console.log(roomDesc)
        console.log(roomColor)

        // await axios.post("http://localhost:8080/user/token", formData)
        //     .then((res) => {
        //     }).catch((err) => console.log(err));

        props.history.push('/inroom')
    }


    return (
        <Fragment>
            <div className="wrapper">
                <div className="makeroom-container">
                    <h1>
                        <div><img src={Logo} width="80" alt="" /></div>
                            방 만들기
                        </h1>

                    <form className="makeroom_form" onSubmit={onMakeRoom}>
                        <label>
                            방 이름
                                <p className="input">
                                <input ref={roomNameRef} type="text" maxLength="10" placeholder="" className="text" />
                            </p>
                        </label>
                        <label>
                            방 소개
                                <p className="input">
                                <input ref={roomDescRef} type="text" maxLength="20" placeholder="" className="text" />
                            </p>
                        </label>
                        <label>
                            방 색상
                                <p className="inputColor">
                                <input ref={roomColorRef} type="color" maxLength="10" className="color" />
                            </p>
                        </label>
                        <p className="submit">
                            <input type="submit" value="생성하기" className="text" />
                        </p>
                        <p className="submit">
                            <input type="submit" value="뒤로가기" className="text" />
                        </p>
                    </form>

                </div>
            </div>
        </Fragment>
    )

}
export default Login;

