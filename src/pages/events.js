import React from "react";
import { graphql } from "gatsby";
import { Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import Divider from "../components/divider";
import EventsCardGrid from "../components/EventsCardGrid";

const EventsPage = ({ data: { upcoming, past } }) => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" sx={{ padding: "2em 0 1em" }}>
        Events
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Upcoming events
      </Typography>
      <EventsCardGrid edges={upcoming.edges} />
      <Divider />
      <Typography variant="h5" component="h2" gutterBottom>
        Past events
      </Typography>
      <EventsCardGrid edges={past.edges} />
    </Layout>
  );
};

const eventsPageQuery = graphql`
  query EventsPageQuery {
    upcoming: allMdx(
      filter: {
        fields: { collection: { eq: "events" }, isFuture: { eq: true } }
      }
      sort: { fields: [frontmatter___eventDate], order: ASC }
    ) {
      edges {
        node {
          ...EventMarkdownFrontmatterFragment
          fields {
            slug
          }
        }
      }
    }
    past: allMdx(
      filter: {
        fields: { collection: { eq: "events" }, isFuture: { eq: false } }
      }
      sort: { fields: [frontmatter___eventDate], order: DESC }
    ) {
      edges {
        node {
          ...EventMarkdownFrontmatterFragment
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default EventsPage;
export { eventsPageQuery };
