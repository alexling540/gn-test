import React from "react";
import { List } from "@mui/material";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Code as WebsiteIcon,
} from "@mui/icons-material";

const MemberListItem = ({ avatar, bio, name, position }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={position} />
      <ListItemText primary={bio} />
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemIcon>
        <LinkedInIcon />
      </ListItemIcon>
      <ListItemIcon>
        <WebsiteIcon />
      </ListItemIcon>
    </ListItem>
  );
};

export default MemberListItem;
