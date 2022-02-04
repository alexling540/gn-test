import React from "react";
import { graphql } from "gatsby";
import { List, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import MemberListItem from "../components/memberListItem";

const TeamPage = ({ data: { allMarkdownRemark } }) => {
  const { edges } = allMarkdownRemark;
  return (
    <Layout>
      <Typography variant="h4" sx={{ padding: "2em 0 1em" }}>
        Team
      </Typography>
      <List>
        {edges.map((edge) => (
          <MemberListItem
            name="test name"
            bio="this is a test bio"
            position="test position"
          />
        ))}
      </List>
      {JSON.stringify(edges)}
    </Layout>
  );
};

const teamPageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "person" } } }) {
      edges {
        node {
          frontmatter {
            firstName
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default TeamPage;
export { teamPageQuery };
