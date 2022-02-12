import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Language as WebsiteIcon,
} from "@mui/icons-material";

import DefaultProfilePicture from "../images/default_profile_picture.jpg";

const IconLink = ({ link, icon: Icon }) => {
  return (
    <a href={link}>
      <Icon fontSize="large" />
    </a>
  );
};

const PersonCard = ({
  picture,
  name,
  role,
  intro,
  gitHub,
  linkedIn,
  personalWebsite,
  width,
}) => {
  return (
    <Card sx={{ width: width ?? 300, maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height={width ?? 300}
        image={picture ? picture : DefaultProfilePicture}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name.first} {name.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {role}
        </Typography>
        <Typography variant="body2" paragraph>
          {intro}
        </Typography>
      </CardContent>
      <CardActions>
        {gitHub && <IconLink link={gitHub} icon={GitHubIcon} />}
        {linkedIn && <IconLink link={linkedIn} icon={LinkedInIcon} />}
        {personalWebsite && (
          <IconLink link={personalWebsite} icon={WebsiteIcon} />
        )}
      </CardActions>
    </Card>
  );
};

export default PersonCard;
