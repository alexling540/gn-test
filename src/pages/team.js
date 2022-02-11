import React from "react";
import { graphql } from "gatsby";
import { Grid, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import PersonCard from "../components/PersonCard";

const TeamPage = ({ data: { president, vicePresident, officers } }) => {
  const { edges } = officers;
  return (
    <Layout>
      <Typography variant="h4" component="h1" sx={{ padding: "2em 0 1em" }}>
        Team
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        columnSpacing={4}
        rowSpacing={4}
      >
        {president && (
          <Grid item>
            <PersonCard {...president.frontmatter} />
          </Grid>
        )}
        {vicePresident && (
          <Grid item>
            <PersonCard {...vicePresident.frontmatter} />
          </Grid>
        )}
        {edges.map(({ node }, idx) => (
          <Grid item key={idx}>
            <PersonCard {...node.frontmatter} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

const teamPageQuery = graphql`
  query {
    president: markdownRemark(
      fields: { collection: { eq: "people" } }
      frontmatter: { personRole: { eq: "President" } }
    ) {
      ...PersonMarkdownFrontmatterFragment
    }
    vicePresident: markdownRemark(
      fields: { collection: { eq: "people" } }
      frontmatter: { personRole: { eq: "Vice President" } }
    ) {
      ...PersonMarkdownFrontmatterFragment
    }
    officers: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "people" } }
        frontmatter: { personRole: { eq: "Officer" } }
      }
    ) {
      edges {
        node {
          ...PersonMarkdownFrontmatterFragment
        }
      }
    }
  }
`;

export default TeamPage;
export { teamPageQuery };
