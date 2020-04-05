import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../css.css';

import Logo from '../images/Logo.png';



const Header = () => {

    return (
        <div className="header">
            <div className="header-container">
                <div className="logo"><img src={Logo} width="140" /></div>
                <div className="sign-box">
                    <Link className= "sign" to="/login" >로그인</Link>
                </div>
            </div>
        </div>

    )
}

export default Header; 