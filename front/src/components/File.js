import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function File() {

  return (
    <List className="file_container">
      <ListItem>
        <ListItemIcon>
          <FontAwesomeIcon className="file_icon" icon="file-powerpoint" size="2x" />
        </ListItemIcon>
        <ListItemText primary="발표.ppt" secondary="Jan 9, 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FontAwesomeIcon className="file_icon" icon="file-pdf" size="2x" />
        </ListItemIcon>
        <ListItemText primary="발표 최종" secondary="Jan 7, 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FontAwesomeIcon className="file_icon" icon="file-video" size="2x" />
        </ListItemIcon>
        <ListItemText primary="시연영상" secondary="July 20, 2020" />
      </ListItem>
    </List>
  );
}