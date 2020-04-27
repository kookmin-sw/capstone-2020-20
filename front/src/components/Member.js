import React from "react";
import '../css.css';
import Popup from "reactjs-popup";

export default ({ close }) => (
  <div className="modal">
    <a className="modal_close" onClick={close}>
      &times;
    </a>
    <div className="modal_header"> 멤버 추가 </div>
    <div className="modal_content">
      <label>팀원 이름</label>
      <input type="text" placeholder=" 추가할 팀원을 검색하세요" />
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