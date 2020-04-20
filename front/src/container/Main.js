import React, { Component, Fragment } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import Logo from '../images/Rooom_Logo.png';

const Main = () => {

    return (
        <Fragment>
            <div className="wrapper">
                <Header isLogged={false}></Header>
                <div className="content">
                    Rooom 관련 소개
                </div>
            </div>

            <Footer></Footer>
        </Fragment>
    )
}



export default Main;

