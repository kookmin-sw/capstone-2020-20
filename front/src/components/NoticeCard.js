import React from 'react';
import '../css.css';
import user from '../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NoticeCard = () => {

  return (
    <div className="notice_card">
      <div className="noticeCard_userImg">
         <img src={user} width="20" alt="" />
      </div>
      <div className="noticeCard_content">
        <div className="noticeCard_name">
          깃허브 관리
        </div>
        <div className="noticeCard_info">
          윤수민
        </div>
        <div className="noticeCard_info">
          2020-01-01
        </div>
      </div>
    </div>
  );
}

export default NoticeCard;