import React, { Component, Fragment, useState, useRef } from 'react';
import moment from 'moment'
import '../css.css';
import Logo from '../images/Logo.png';
import Footer from "../components/Footer";

import axios from "axios";


const Login = (props) => {
    const [User, setUser] = useState({
        sUserId: "",
        sUserPW: "",
        sCallKey: "kmucs2",
        sAuthKey: "",
        txt_return_url: "",
        signupError: ''
    });

    const userTyping = (whichInput, event) => {
        switch (whichInput) {
            case 'id':
                setUser({ ...User, sUserId: event.target.value });
                break;

            case 'password':
                setUser({ ...User, sUserPW: event.target.value });
                break;

            default:
                break;
        }
    }

    const getEncryptStr = (sEncKey, sUser_id) => {
        let now = moment().format('YYYYMMDD');

        let ret_buf = now;

        for (let i = 0; i < sEncKey.length; i++) {
            ret_buf += sEncKey.charCodeAt(i);
        }

        for (let i = 0; i < sUser_id.length; i++) {
            ret_buf += sUser_id.charCodeAt(i);
        }

        for (let i = 0; i < sUser_id.length; i++) {
            ret_buf += now.charCodeAt(i);
        }

        return ret_buf;
    }
    const submitSignup = (e) => {

        e.preventDefault();
        User.sAuthKey = getEncryptStr("swlog1", User.sUserId);
        console.log(User.sUserId, User.sUserPW, User.sCallKey, User.sAuthKey)


        const aa = async () => {
            try {
                let formData = new FormData();
                formData.append("txt_userid", User.sUserId)
                formData.append("txt_userpw", User.sUserPW)
                formData.append(" txt_call_key", User.sCallKey)
                formData.append("txt_auth_key", User.sAuthKey)
                const res = await axios.post('https://ktis.kookmin.ac.kr/kmu/com.LoginSSO.do', formData, 
                {headers: {'Access-Control-Allow-Origin': '*'}});
                console.log("dd");

            } catch (e) {
                console.log("err");
            }
        }

        aa();
    
        //props.history.push('/myroom');
    }






    return (
        <Fragment>
            <div className="wrapper">
                <div className="login-container">
                    <h1>
                        <div><img src={Logo} width="160" /></div>
                    </h1>

                    <form onSubmit={submitSignup}>
                        <p className="input">
                            <input name="txt_userid" value={User.sUserId} onChange={(e) => { userTyping('id', e) }} type="text" maxLength="10" placeholder="학번" className="text" />
                        </p>
                        <p className="input">
                            <input name="txt_userpw" value={User.sUserPW} onChange={(e) => { userTyping('password', e) }} type="password" maxLength="20" placeholder="비밀번호" className="text" />
                        </p>
                        <input type="hidden" name="txt_call_key" value={User.sCallKey}></input>
                        <input type="hidden" name="txt_auth_key " value={User.sAuthKey}></input>
                        <input type="hidden" name="txt_auth_key " value={User.txt_return_url}></input>
                        <p className="submit">
                            <input type="submit" value="로그인" className="text" />
                        </p>
                    </form>

                </div>
            </div>

            <Footer></Footer>
        </Fragment>
    )

}
export default Login;

