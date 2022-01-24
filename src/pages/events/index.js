import React from "react";
import { graphql } from "gatsby";
import { Grid, Typography } from "@mui/material";

import Layout from "../../components/layout/layout";
import EventCard from "../../components/eventCard";

const EventsIndexPage = ({ data: { allMarkdownRemark } }) => {
  const { edges } = allMarkdownRemark;

  return (
    <Layout>
      <Typography variant="h4" sx={{ padding: "2em 0 1em" }}>
        Events
      </Typography>
      <Typography variant="h5">Upcoming events</Typography>
      <Typography variant="h5">Previous events</Typography>
      {JSON.stringify(edges)}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        columnSpacing={3}
      >
        {edges.map(({ node: { frontmatter, fields } }, idx) => {
          const { date, description, image, name } = frontmatter;
          const { slug } = fields;
          return (
            <Grid item key={idx}>
              <EventCard
                name={name}
                timestamp={date}
                description={description}
                link={slug}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

const eventsIndexPageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "event-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            description
            image
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default EventsIndexPage;
export { eventsIndexPageQuery };
