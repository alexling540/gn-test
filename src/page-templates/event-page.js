import React from "react";
import { graphql } from "gatsby";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/layout/layout";
import EventPageTemplate from "../components/templates/EventPageTemplate";

const EventPage = ({ data: { mdx } }) => {
  const { frontmatter, body } = mdx;
  const { name } = frontmatter;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/events" underline="hover" color="inherit">
          Events
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <EventPageTemplate {...frontmatter} body={body} />
    </Layout>
  );
};

const pageQuery = graphql`
  query EventPageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
export { pageQuery };
