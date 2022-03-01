import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Moment from "react-moment";
import "moment-timezone";

import shortcodes from "./shortcodes";

const SpeakersSection = ({ speakers }) => {
  return (
    <Box>
      <Typography variant="h5" component="h2">
        Speakers
      </Typography>
      {speakers}
    </Box>
  );
};

const EventPageTemplate = ({
  name,
  date,
  banner,
  location,
  description,
  speakers,
  body,
  html,
}) => {
  return (
    <React.Fragment>
      <Box
        style={{
          background: banner
            ? `linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.65) 100%), url(${banner}) 0% 0%/cover`
            : "lightgrey",
        }}
        sx={{
          backgroundSize: "auto, cover",
          backgroundPosition: "0 0, center",
          padding: { xs: "5em 16px", sm: "5em 24px" },
          margin: { xs: "0 -16px 32px", sm: "0 -24px 32px" },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          color={banner ? "white" : "black"}
        >
          {name}
        </Typography>

        <Typography
          variant="h5"
          component="div"
          color={banner ? "white" : "black"}
        >
          <Moment date={date} tz="America/Chicago" format="LLLL" />
        </Typography>

        <Typography
          variant="h5"
          component="div"
          color={banner ? "white" : "black"}
        >
          {location}
        </Typography>
      </Box>

      {speakers && <SpeakersSection speakers={speakers} />}

      <Typography variant="h5" component="h2" gutterbottom>
        About this event
      </Typography>
      {body ? (
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      ) : (
        html
      )}
    </React.Fragment>
  );
};

export default EventPageTemplate;
