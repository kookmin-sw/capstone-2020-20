import React, { Fragment, useState, useContext} from 'react';
import '../css.css';
import moment from 'moment'
import Logo from '../images/Logo.png';
import Footer from "../components/Footer";
import Cookies from 'js-cookie';
import axios from "axios";
import MyRoomContext from '../context/MyRoomContext';


const Login = (props) => {
    const [User, setUser] = useState({
        sUserId: "",
        sUserPW: "",
        sCallKey: "KMUCS2",
        sAuthKey: "",
        txt_return_url: "",
        signupError: ''
    });

    let SUCC_CD = ""
    let USER_NM = ""

    const { isLogged, setIsLogged } = useContext(MyRoomContext);

    const userTyping = (whichInput, event) => {
        switch (whichInput) {
            case 'id':
                setUser({ ...User, sUserId: event.target.value, sAuthKey: getEncryptStr("swlog1", event.target.value) });
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

    const submitSignup = async (e) => {
        e.preventDefault();
        await axios.get('https://ktis.kookmin.ac.kr/kmu/com.LoginAPI.do', {
            params: {
                txt_userid: User.sUserId,
                txt_userpw: User.sUserPW,
                txt_call_key: User.sCallKey,
                txt_auth_key: User.sAuthKey,
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
            
            setIsLogged(true);

            let formData = new FormData();

            formData.append("User_id", User.sUserId)
            formData.append("User_name", USER_NM);

            // await axios.post("http://211.208.115.66:20000/user/token", formData)
            //     .then((res) => {
            //         Cookies.set('token', res.data);
            //     }).catch((err) => console.log(err));

            // await axios.get("http://211.208.115.66:20000/user/token", { headers: { Authorization: Cookies.get('token') } })
            //     .then((res) => {
            //         setMyRoomInfo({ ...myRoomInfo, data: res.data });
            //     }).catch((err) => console.log(err));

            props.history.push('/myroom')
        }

    }

    return (
        <Fragment>
            <div className="wrapper">
                <div className="login-container">
                    <h1>
                        <div><img src={Logo} width="160" alt="" /></div>
                    </h1>

                    <form onSubmit={submitSignup}>
                        <p className="input">
                            <input name="txt_userid" value={User.sUserId} onChange={(e) => { userTyping('id', e) }} type="text" maxLength="10" placeholder="학번" className="text" />
                        </p>
                        <p className="input">
                            <input name="txt_userpw" value={User.sUserPW} onChange={(e) => { userTyping('password', e) }} type="password" maxLength="20" placeholder="비밀번호" className="text" />
                        </p>
                        <input type="hidden" name="txt_call_key" value={User.sCallKey}></input>
                        <input type="hidden" name="txt_auth_key" value={User.sAuthKey}></input>
                        <input type="hidden" name="txt_return_url" value={User.txt_return_url}></input>
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

