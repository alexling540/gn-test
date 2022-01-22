import * as React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const EventCard = ({ name, timestamp, description, link }) => {
  return (
    <Card>
      <CardHeader title={name} subheader={timestamp} />
      <CardContent>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>View</Button>
        <Button>RSVP</Button>
      </CardActions>
    </Card>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCard;
