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
        alignItems="flex-start"
        columnSpacing={4}
        rowSpacing={4}
        sx={{
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        {edges.map(({ node: { frontmatter, fields } }, idx) => {
          const { name, date, description, banner } = frontmatter;
          const { slug } = fields;

          return (
            <Grid item key={idx}>
              <EventCard
                name={name}
                timestamp={date}
                description={description}
                banner={banner}
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
    allMarkdownRemark(filter: { fields: { collection: { eq: "events" } } }) {
      edges {
        node {
          frontmatter {
            banner
            date
            description
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
