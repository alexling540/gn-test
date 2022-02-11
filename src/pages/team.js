import React from "react";
import { graphql } from "gatsby";
import { Grid, List, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import PersonCard from "../components/PersonCard";

const TeamPage = ({ data: { president, vicePresident, officers } }) => {
  const { frontmatter: presidentFrontmatter } = president;
  const { frontmatter: vicePresidentFrontmatter } = vicePresident;
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
        <Grid item>
          <PersonCard {...presidentFrontmatter} />
        </Grid>
        <Grid item>
          <PersonCard {...vicePresidentFrontmatter} />
        </Grid>
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
      fields: { collection: { eq: "members" } }
      frontmatter: { role: { eq: "President" } }
    ) {
      ...PeopleMarkdownFrontmatterFragment
    }
    vicePresident: markdownRemark(
      fields: { collection: { eq: "members" } }
      frontmatter: { role: { eq: "Vice President" } }
    ) {
      ...PeopleMarkdownFrontmatterFragment
    }
    officers: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "members" } }
        frontmatter: { role: { eq: "Officer" } }
      }
    ) {
      edges {
        node {
          ...PeopleMarkdownFrontmatterFragment
        }
      }
    }
  }
`;

export default TeamPage;
export { teamPageQuery };
