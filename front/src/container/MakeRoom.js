import React, { Component, Fragment } from 'react';
import '../css.css';

import Logo from '../images/Rooom_Logo.png';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="makeroom-container">
                        <h1>
                            <div><img src={Logo} width="80" alt="" /></div>
                            방 만들기
                        </h1>       

                        <form className = "makeroom_form">
                            방 이름
                            <p className="input">
                                <input type="text" maxLength="10" placeholder="" className="text" />
                            </p>
                            방 소개
                            <p className="input">
                                <input type="password" maxLength="10" placeholder="" className="text" />
                            </p>
                            방 색상
                            <p className="input">
                                <input type="password" maxLength="10" placeholder="" className="text" />
                            </p>
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
}
export default Login;

