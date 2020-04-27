import React from "react";
import '../css.css';
import Popup from "reactjs-popup";

export default ({ close }) => (
  <div className="modal">
    <a className="modal_close" onClick={close}>
      &times;
    </a>
    <div className="modal_header"> 채널 추가 </div>
    <div className="modal_content">
      <label>채널 이름</label>
      <input type="text" placeholder="추가할 채널명을 입력하세요 " />
      <div className="modal_actions">
        <button
          className="button"
          onClick={() => {
            console.log("modal closed ");
            close();
          }}
        >
          추가
        </button>
      </div>
    </div>
    
  </div>
);