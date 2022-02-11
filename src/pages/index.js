import React from "react";
import { Link, graphql } from "gatsby";
import { Box, Button, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import Divider from "../components/divider";
import EventsCardGrid from "../components/EventsCardGrid";

import background from "../images/home_background.jpeg";

// markup
const IndexPage = ({ data: { upcomingEvents } }) => {
  return (
    <Layout>
      <title>Home Page</title>

      <Box
        sx={{
          backgroundImage: `linear-gradient(0deg, white 0%, rgba(0,0,0,0.5) 20%), url(${background})`,
          backgroundSize: "auto, cover",
          backgroundPosition: "0 0, center",
          color: "white",
          padding: { xs: "5em 16px", sm: "5em 24px" },
          margin: { xs: "0 -16px 1.5em", sm: "0 -24px 1.5em" },
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Google Developer Student Club
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          @Texas A&amp;M University
        </Typography>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph gutterBottom>
        Howdy! We are Developer Student Club at Texas A&amp;M University! Our
        mission is to build an exclusive developer community for Aggies!
      </Typography>
      <Typography variant="body1" paragraph gutterBottom>
        We host weekly meetings on Thursdays @6:30-7:30PM where we have
        technical and career workshops, as well as socials!
      </Typography>
      <Button to="/team" component={Link}>
        Meet our team
      </Button>

      <Divider />

      <Typography variant="h5" component="h2" gutterBottom>
        Upcoming Events &amp; Workshops
      </Typography>
      <EventsCardGrid edges={upcomingEvents.edges} />
    </Layout>
  );
};

const indexPageQuery = graphql`
  query {
    upcomingEvents: allMdx(
      filter: {
        fields: { collection: { eq: "events" }, isFuture: { eq: true } }
      }
      limit: 3
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
  }
`;

export default IndexPage;
export { indexPageQuery };
