import React from 'react'
import { Link } from "react-router-dom";
import '../css.css';

import user from '../images/user.png';



const User = () => {

    return (
        <div className="user">
            <div className="user_container">
                <div className="user_img"><img src={user} width="50" alt="" /></div>
                <div className="user_box">
                    윤수민
                </div>
                <div className="user_box">
                    sumin9497@gmail.com
                </div>
                <div className="user_box">
                    <Link className="user_edit" to="/inroom" >프로필 편집</Link>
                </div>
            </div>
        </div>

    )
}

export default User; 