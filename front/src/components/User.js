import React from 'react'
import { withRouter } from 'react-router-dom'

import '../css.css';
import user from '../images/user.png';



const User = (props) => {

    const onLogout = () => {
        props.history.push('/')
    }

    return (
        <div className="user_container">
            <div className="user_img"><img src={user} width="70" alt="" /></div>
            <div className="user_box">이지훈</div>
            <div className = "sign" onClick = {onLogout}>로그아웃</div>
        </div>


    )
}

export default withRouter(User); 