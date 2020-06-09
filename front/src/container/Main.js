import React, { Component, Fragment } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from 'js-cookie';
import main from '../images/main.png';

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
                            <div className="main_content">
                                <div className="main_title">
                                    국민대학교 학생들을 위한 협업서비스 RoooM
                                </div>
                                <div className="main_desc">
                                    종합정보시스템 ID/PW로 로그인하세요!
                                </div>
                                <div className="main_img"><img src={main} width="780" alt="" /></div>
                            </div>
                        </div>
                    <Footer></Footer>
                </Fragment>
            }
        </Fragment>


    )
}



export default Main;

