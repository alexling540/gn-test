import React from "react";
import { graphql } from "gatsby";
import { Grid, List, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import MemberCard from "../components/memberCard";

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
          <MemberCard {...presidentFrontmatter} />
        </Grid>
        <Grid item>
          <MemberCard {...vicePresidentFrontmatter} />
        </Grid>
        {edges.map(({ node }, idx) => (
          <Grid item key={idx}>
            <MemberCard {...node.frontmatter} />
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
      ...MemberMarkdownFrontmatterFragment
    }
    vicePresident: markdownRemark(
      fields: { collection: { eq: "members" } }
      frontmatter: { role: { eq: "Vice President" } }
    ) {
      ...MemberMarkdownFrontmatterFragment
    }
    officers: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "members" } }
        frontmatter: { role: { eq: "Officer" } }
      }
    ) {
      edges {
        node {
          ...MemberMarkdownFrontmatterFragment
        }
      }
    }
  }
`;

export default TeamPage;
export { teamPageQuery };
