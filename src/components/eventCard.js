import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const EventCard = ({ name, timestamp, description, banner, link, width }) => {
  return (
    <Card sx={{ width: width ?? 275, maxWidth: "100%" }}>
      <CardHeader title={name} subheader={timestamp} />
      {banner && <CardMedia component="img" height="120" image={banner} />}
      <CardContent>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={link}>
          View
        </Button>
        <Button>RSVP</Button>
      </CardActions>
    </Card>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EventCard;
