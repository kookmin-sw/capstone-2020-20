import React from "react";
import '../css.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default ({ close }) => (
  <div className="modal">
    <a className="modal_close" onClick={close}>
      &times;
    </a>
    <div className="modal_header"> 채널 추가 </div>
    <form className="modal_content" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="채널명" variant="outlined" />
      <div className="modal_actions">
        <div className="modal_button">
          <Button
            variant="outlined"
            onClick={() => {
              
            }}
          >
            추가
          </Button>
        </div>
        <div className="modal_button">
          <Button
            variant="outlined"
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            닫기
          </Button>
        </div>
      </div>
      </form>
    
  </div>
);