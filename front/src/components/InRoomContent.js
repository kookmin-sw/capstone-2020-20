import React from 'react'
import '../css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from "reactjs-popup";
import Channel from "./Channel.js";
import Member from "./Member.js"
import MemberInfo from "./MemberInfo.js"
import File from "./File.js"
import Notice from "./Notice.js"
import Button from '@material-ui/core/Button';


const InRoomContent = () => {

    return (
        <div className="InRoom_wrapper">
            <div className="left_nav">
                <div className="aboutRoom">
                    <div className="roomColor"></div>
                    <div className="roomName">20조</div>
                    <div className="roomDesc">20조 입니다.</div>
                </div>
                <div>
                    <ul className="navList">
                        <li className = "menu">채널
                            <ul className = "subList">
                                <li>기본 채널</li>
                                <li>프론트</li>
                                <li>백엔드</li>
                                <Popup modal trigger={<Button variant="outlined" color="primary">채널 추가</Button>}>
                                    {close => <Channel close={close} />}
                                </Popup>
                            </ul>
                        </li>
                        <li className = "menu">팀원
                            <ul  className = "subList">
                                <li>이지훈</li>
                                <li>허민</li>
                                <li>한준호</li>
                                <Popup trigger={<li>윤수민</li>} 
                                    position="right bottom" 
                                    lockScroll="false"
                                    contentStyle= {{ width: "300px" }} >
                                    {close => <MemberInfo close={close} />}
                                </Popup>
                                <Popup modal trigger={<button> 멤버 추가</button>}>
                                    {close => <Member close={close} />}
                                </Popup>
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
                            <div className="msg">발표 준비 하고 있어??</div>
                        </div>

                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">어디까지됨??</div>
                        </div>

                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">지금 동영상 찍는중</div>
                        </div>

                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">ㄱㄷㄱㄷ</div>
                        </div>


                        <div class="chat-message mine">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">계획서는 다씀??</div>
                        </div>


                        <div class="chat-message">
                            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" color="grey" />
                            <span className="name">허민</span>
                            <div className="msg">ㅇㅇ 난 다함</div>
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
                    <Notice></Notice>

                </div>
                <div className="file">

                    업로드 된 자료
                    <File></File>

                </div>
            </div>

        </div>

    )
}

export default InRoomContent; 