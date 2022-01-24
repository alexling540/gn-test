import React from "react";
import { graphql } from "gatsby";
import { Typography } from "@mui/material";

import Layout from "../../components/layout/layout";

const ProjectsIndexPage = ({ data: { allMarkdownRemark } }) => {
  const { edges } = allMarkdownRemark;
  return (
    <Layout>
      <Typography variant="h4" sx={{ padding: "2em 0 1em" }}>
        Projects
      </Typography>
      <Typography variant="h5">Ongoing projects</Typography>
      <Typography variant="h5">Previous projects</Typography>
      {JSON.stringify(edges)}
    </Layout>
  );
};

const projectsIndexPageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          frontmatter {
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

export default ProjectsIndexPage;
export { projectsIndexPageQuery };
