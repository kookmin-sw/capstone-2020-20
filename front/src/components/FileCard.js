import React from 'react';
import '../css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FileCard = () => {

  return (
    <div className="file_card">
        <div className="fileCard_preview">
            <FontAwesomeIcon className="file_icon" icon="file-powerpoint" size="2x" />
        </div>
        <div className="fileCard_content">
          <div className="fileCard_name">
            발표.ppt
          </div>
          <div className="fileCard_info">
            윤수민
          </div>
          <div className="fileCard_info">
            2020-01-01
          </div>
        </div>
    </div>
  );
}

export default FileCard;