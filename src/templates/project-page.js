import React from "react";
import { graphql } from "gatsby";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/layout/layout";

const ProjectPageTemplate = ({ name }) => {
  return <div></div>;
};

const ProjectPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/projects" underline="hover" color="inherit">
          Projects
        </Link>
        <Typography color="text.primary">{"A"}</Typography>
      </Breadcrumbs>
      <ProjectPageTemplate name="A" />
    </Layout>
  );
};

const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        description
        image
        name
        title
      }
    }
  }
`;

export default ProjectPage;
export { ProjectPageTemplate, projectPageQuery };
