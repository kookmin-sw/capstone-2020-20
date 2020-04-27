import React from 'react'
import { withRouter } from 'react-router-dom'

import '../css.css';
import user from '../images/user.png';



const MemberInfo = ({ close }) => {

    return (
        <div className="user_container">
            <a className="modal_close" onClick={close}>
                &times;
            </a>
            <div className="user_img"><img src={user} width="70" alt="" /></div>
            <div className="user_box">윤수민</div>
            <div className="user_box">sumin9497@naver.com</div>
        </div>
    )
}

export default withRouter(MemberInfo); 