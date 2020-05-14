import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Notice() {

  return (
    <List className="notice_container">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon className="file_icon" icon="user" size="2x" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="04/10까지 중간보고서 작성" secondary="Jan 9, 2020" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon className="file_icon" icon="user" size="2x" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="채팅 구현 참고 사이트" secondary="Jan 7, 2020" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon className="file_icon" icon="user" size="2x" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="깃허브 관리" secondary="July 20, 2020" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon className="file_icon" icon="user" size="2x" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="깃허브 관리" secondary="July 20, 2020" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon className="file_icon" icon="user" size="2x" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="깃허브 관리" secondary="July 20, 2020" />
      </ListItem>
    </List>
  );
}