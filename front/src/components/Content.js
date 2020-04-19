import React from 'react'
// import { Link } from "react-router-dom";
import '../css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Content = () => {

    return (
        <div className="content_list">
            <div className="content_container">
                <div className="menu">
                    채널
                </div>
                <div className="sub_menu">
                    기본 채널
                </div>
                <div className="sub_menu">
                    발표
                </div>
                <div className="menu_plus">
                    채널 추가 
                    <FontAwesomeIcon icon="plus-circle" size="1x" />
                </div>
                <div className="menu_line"></div>
                
                <div className="menu">
                    멤버관리
                </div>
                <div className="sub_menu">
                    멤버 1(방장)
                </div>
                <div className="sub_menu">
                    멤버 2
                </div>
                <div className="menu_plus">
                    멤버 초대 
                    <FontAwesomeIcon icon="plus-circle" size="1x" />
                </div>
                <div className="menu_line"></div>

                <div className="menu">
                    자료관리
                </div>
                <div className="menu_line"></div>

                <div className="menu">
                    공지사항
                </div>
                <div className="menu_line"></div>

                <div className="menu">
                    회의록
                </div>
                <div className="menu_line"></div>
            </div>
        </div>

    )
}

export default Content; 