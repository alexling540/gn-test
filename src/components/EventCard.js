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
import Moment from "react-moment";
import "moment-timezone";

const EventCard = ({ name, timestamp, description, banner, link, width }) => {
  return (
    <Card sx={{ width: width ?? 275, maxWidth: "100%" }}>
      {banner && <CardMedia component="img" height="120" image={banner} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Moment date={timestamp} tz="America/Chicago" format="LLLL" />
        </Typography>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={link}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EventCard;
