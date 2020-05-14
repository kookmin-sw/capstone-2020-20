import React from 'react';
import { Link } from "react-router-dom";
import '../css.css';
import Popup from "reactjs-popup";
import Channel from "./Channel.js"
import MemberInfo from "./MemberInfo.js"
import Button from '@material-ui/core/Button';
import Member from "./Member.js"
import FileCard from "./FileCard.js";


const FileContent = () => {

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
                        <Popup modal trigger={<Button variant="outlined" color="primary">멤버 추가</Button>}>
                            {close => <Member close={close} />}
                        </Popup>
                    </ul>
                </li>
                <Link to="/filebox" style={{ textDecoration: 'none' }}><li className = "menu">자료</li></Link>
                <Link to="/noticebox" style={{ textDecoration: 'none' }}><li className = "menu">공지사항</li></Link>
                <li className = "menu">회의</li>
              </ul>
          </div>
        </div>
      <div className="room_content">
        <div className="fileCard_container">
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
        </div>
      </div>
    </div>
  );
}

export default FileContent;