import React, { useState } from 'react'
import '../css.css';


const Invitation = () => {

    return (
      <div><div className="invitation_area">
        <div className="invitation_box">
          <div className="invitation_choose">
            <button className="invitation_accept">수락</button>
            <button className="invitation_deny">거절</button>
          </div>
          <div className="room_color">    
          </div>
          <div className="room_name">
            방 3
          </div>
          <div className="room_member">
            이지훈 님으로부터의 초대
          </div>
          <div className="room_desc">
            국민대학교 2020-1학기 캡스톤 팀 방입니다
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Invitation; 