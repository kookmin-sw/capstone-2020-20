import React, { Component, Fragment } from 'react';



import Header from "../components/Header";
import Footer from "../components/Footer";

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Header></Header>
                    <div className="content">추후 만들 예정</div>
                </div>

                <Footer></Footer>
            </Fragment>
        )
    }
}



export default Main;

