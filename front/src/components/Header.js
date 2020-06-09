import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import '../css.css';

import Logo from '../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from "../components/User";



const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState({
        display: "none"
    });
    const [iconColor, setIconColor] = useState();

    const onClickUser = (e) => {
        if (!isOpen) {
            setIsOpen(true)
            setVisible({
                display: "block"
            })
            setIconColor({
                color: "#07689F"
            })
        }

        else {
            setIsOpen(false)
            setVisible({
                display: "none"
            })
            setIconColor({
                color: "#A3DAF9"
            })
        }
    }

    return (
        <Fragment>
            {Cookies.get("token") ?
                <Fragment>
                    <div className="header">
                        <div className="header-container">
                            <Link to="/" ><div className="logo"><img src={Logo} width="140" alt="" /></div></Link>
                            <div className="sign-box">
                                <FontAwesomeIcon className="Icon" icon="user" size="2x" style={iconColor} onClick={onClickUser} />
                                <FontAwesomeIcon className="Icon" icon="bell" size="2x" />
                                <FontAwesomeIcon className="Icon" icon="calendar-check" size="2x" />
                                <div className="userPopUp" style={visible}>
                                    <User></User>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popupBack" style={visible} onClick={onClickUser}></div>
                </Fragment>
                : (<div className="header">
                    <div className="header-container">
                        <Link to="/" ><div className="logo"><img src={Logo} width="140" alt="" /></div></Link>
                        <div className="sign-box">
                            <Link className="sign" to="/login" >로그인</Link>
                        </div>
                    </div>
                </div>)
            }
        </Fragment>


    )
}

export default Header; 