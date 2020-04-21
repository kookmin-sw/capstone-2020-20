import React, { Component, Fragment } from 'react';
import '../css.css';

import Logo from '../images/Rooom_Logo.png';
import { Link } from "react-router-dom";

const Login = (props) => {

    const onMakeRoom = (e) => {
        e.preventDefault();

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
                                <input type="text" maxLength="10" placeholder="" className="text" />
                            </p>
                        </label>
                        <label>
                            방 소개
                                <p className="input">
                                <input type="text" maxLength="20" placeholder="" className="text" />
                            </p>
                        </label>
                        <label>
                            방 색상
                                <p className="inputColor">
                                <input type="color" maxLength="10" className="color" />
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

