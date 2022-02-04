import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const EventCard = ({ name, timestamp, description, banner, link, width }) => {
  return (
    <Card sx={{ width: width ?? 275, maxWidth: "100%" }}>
      {banner && <CardMedia component="img" height="120" image={banner} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {new Date(timestamp).toLocaleDateString("en-US", {
            timeZone: "America/Chicago",
            // weekday: "long",
            // year: "numeric",
            // month: "long",
            // day: "numeric",
            dateStyle: "long",
            timeStyle: "short",
          })}
        </Typography>
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
