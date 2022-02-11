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
            ? `linear-gradient(90deg, rgb(255, 255, 255) 0%, transparent 25%, transparent 75%, rgb(255, 255, 255) 100%), url(${banner})`
            : "lightgrey",
        }}
        sx={{
          backgroundSize: "auto, cover",
          backgroundPosition: "0 0, center",
          padding: { xs: "3em 16px", sm: "3em 24px" },
          margin: { xs: "0 -16px", sm: "0 -24px" },
        }}
      >
        <Typography variant="h4" component="h1">
          {name}
        </Typography>

        <Typography variant="h5" component="div">
          <Moment date={date} tz="America/Chicago" format="LLLL" />
        </Typography>

        <Typography variant="h5" component="div">
          {location}
        </Typography>
      </Box>

      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      {speakers && <SpeakersSection speakers={speakers} />}

      {body && (
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      )}
      {html && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
    </React.Fragment>
  );
};

export default EventPageTemplate;
