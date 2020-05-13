import React, { Component, Fragment } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from 'js-cookie';

const Main = (props) => {

    return (
        <Fragment>
            {Cookies.get("token") ?
                <Fragment>
                    {props.history.push('/myroom')}
                </Fragment>
                :
                <Fragment>
                    <div className="wrapper">
                        <Header></Header>
                        <div className="content">
                            Rooom 소개
                        </div>
                    </div>
                    <Footer></Footer>
                </Fragment>
            }
        </Fragment>


    )
}



export default Main;

