import React, { Fragment, useState, useContext } from 'react';
import '../css.css';
import moment from 'moment'
import Logo from '../images/Logo.png';
import Footer from "../components/Footer";
import Cookies from 'js-cookie';
import axios from "axios";
import UserContext from '../context/UserContext';

const Login = (props) => {
    const [kookmin, setKookmin] = useState({
        sUserId: "",
        sUserPW: "",
        sCallKey: "KMUCS2",
        sAuthKey: "",
        txt_return_url: "",
        signupError: ''
    });

    let SUCC_CD = ""
    let USER_NM = ""

    const { User, setUser } = useContext(UserContext);

    const userTyping = (whichInput, event) => {
        switch (whichInput) {
            case 'id':
                setKookmin({ ...kookmin, sUserId: event.target.value, sAuthKey: getEncryptStr("swlog1", event.target.value) });
                break;

            case 'password':
                setKookmin({ ...kookmin, sUserPW: event.target.value });
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

    const submitSignup = async (e) => {
        e.preventDefault();

        await axios.get('https://ktis.kookmin.ac.kr/kmu/com.LoginAPI.do', {
            params: {
                txt_userid: kookmin.sUserId,
                txt_userpw: kookmin.sUserPW,
                txt_call_key: kookmin.sCallKey,
                txt_auth_key: kookmin.sAuthKey,
            },
        }).then((res) => {
            const data = res.data.split("\n")
            const realData = data[1].split("|")
            SUCC_CD = realData[0]
            USER_NM = realData[2];
        })

        if ((SUCC_CD != 999)) {
            alert("학번이나 비밀번호가 틀렸습니다. \n다시 확인해주세요.")
        }

        else {
            console.log("로그인 성공")

            let formData = new FormData();

            formData.append("User_id", kookmin.sUserId)
            formData.append("User_name", USER_NM);

            await axios.post("http://localhost:8080/user/token", formData)
                .then((res) => {
                    Cookies.set('token', res.data);
                }).catch((err) => console.log(err));

            await axios.get("http://localhost:8080/user/load?page=0", { headers: { Authorization: Cookies.get('token') } })
                .then((res) => {
                    Cookies.set('User_name', res.data.User_name)
                   props.history.push('/myroom')
                }).catch((err) => console.log(err));

        }

    }

    // const url = "http://61.101.55.223:8787/login?txt_userid=" + User.sUserId + "&txt_userpw=" + User.sUserPW + "&txt_call_key="
    //              + User.sCallKey + "&txt_auth_key=" + User.sAuthKey;

    return (
        <Fragment>
            <div className="wrapper">
                <div className="login-container">
                    <h1>
                        <div><img src={Logo} width="160" alt="" /></div>
                    </h1>

                    <form onSubmit={submitSignup}>
                        <p className="input">
                            <input name="txt_userid" value={kookmin.sUserId} onChange={(e) => { userTyping('id', e) }} type="text" maxLength="10" placeholder="학번" className="text" />
                        </p>
                        <p className="input">
                            <input name="txt_userpw" value={kookmin.sUserPW} onChange={(e) => { userTyping('password', e) }} type="password" maxLength="20" placeholder="비밀번호" className="text" />
                        </p>
                        <input type="hidden" name="txt_call_key" value={kookmin.sCallKey}></input>
                        <input type="hidden" name="txt_auth_key" value={kookmin.sAuthKey}></input>
                        <input type="hidden" name="txt_return_url" value={kookmin.txt_return_url}></input>
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

