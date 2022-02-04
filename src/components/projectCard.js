import React from "react";
import { Link } from "gatsby";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

const ProjectCard = ({ name, icon, banner, description, link, width }) => {
  return (
    <Card sx={{ width: width ?? 275, maxWidth: "100%" }}>
      <CardHeader title={name} avatar={icon && <Avatar src={icon} />} />
      {banner && <CardMedia component="img" height="120" image={banner} />}
      <CardContent>{description}</CardContent>
      <CardActions>
        <Button component={Link} to={link}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
