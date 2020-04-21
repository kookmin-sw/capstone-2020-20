import React from 'react'
import '../css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const InRoomContent = () => {

    return (
        <div className="InRoom_wrapper">
            <div className="left_nav">
                <div className="aboutRoom">
                    <div className="roomColor"></div>
                    <div className="roomName">캡스톤 디자인</div>
                    <div className="roomDesc">2020-1 캡스톤 디자인 방입니다.  <br></br>소프트웨어 학생들은 위한 Room 프로젝트 진행중</div>
                </div>
                <div>
                    <ul className="navList">
                        <li className = "menu">채널
                            <ul className = "subList">
                                <li>기본 채널</li>
                                <li>프론트</li>
                                <li>백엔드</li>
                            </ul>
                        </li>
                        <li className = "menu">팀원
                            <ul  className = "subList">
                                <li>이지훈</li>
                                <li>허민</li>
                                <li>한준호</li>
                                <li>윤수민</li>
                            </ul>
                        </li>
                        <li className = "menu">자료</li>
                        <li className = "menu">회의</li>
                    </ul>
                </div>
            </div>

            <div className="room_content">
                <div className="chat">

                    <div className="chatView">
                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>

                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">안녕</div>
                        </div>






                    </div>

                    <form className="chatForm" onsubmit="return false">
                        <p className="input">
                            <textarea wrap="hard" placeholder="" className="text" />
                        </p>
                        <p className="submit">
                            <input type="submit" value="전송" className="text" />
                        </p>
                    </form>

                </div>
                <div className="notice">

                    공지사항

                </div>
                <div className="file">

                    업로드 된 자료

                </div>
            </div>

        </div>

    )
}

export default InRoomContent; 