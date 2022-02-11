import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";
import Moment from "react-moment";
import "moment-timezone";

import Layout from "../components/layout/layout";

const EventPageTemplate = ({
  name,
  date,
  banner,
  location,
  description,
  speakers,
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
      {speakers}

      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </React.Fragment>
  );
};

const EventPage = ({ data: { mdx } }) => {
  const { frontmatter, html } = mdx;
  const { name } = frontmatter;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/events" underline="hover" color="inherit">
          Events
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <EventPageTemplate {...frontmatter} html={html} />
    </Layout>
  );
};

const eventPageQuery = graphql`
  query EventPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        name: eventName
        date: eventDate
        banner: eventBanner
        description: eventDescription
      }
    }
  }
`;

export default EventPage;
export { EventPageTemplate, eventPageQuery };
