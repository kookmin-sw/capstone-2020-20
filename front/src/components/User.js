import React from 'react'
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie';
import '../css.css';
import user from '../images/user.png';


const User = (props) => {


    const onLogout = () => {
        Cookies.remove("token")
        Cookies.remove("User_name")
        props.history.push('/')
    }

    return (
        <div className="user_container">
            <div className="user_img"><img src={user} width="70" alt="" /></div>
            <div className="user_box">{Cookies.get('User_name')}</div>
            <div className="sign" onClick={onLogout}>로그아웃</div>
        </div>


    )
}

export default withRouter(User); 