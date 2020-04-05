import React, { Component, Fragment } from 'react';
import '../css.css';
import Logo from '../images/Logo.png';
import Footer from "../components/Footer";

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="login-container">
                        <h1>
                            <div><img src={Logo} width="140" /></div>
                        </h1>

                        <form>
                            <p className="input">
                                <input type="text" maxLength="10" placeholder="학번" className="text" />
                            </p>
                            <p className="input">
                                <input type="password" maxLength="10" placeholder="비밀번호" className="text" />
                            </p>
                            <p className="sumit">
                                <input type="sumit" value="로그인" className="text" />
                            </p>
                        </form>

                    </div>
                </div>

               <Footer></Footer>
            </Fragment>
        )
    }
}
export default Login;

