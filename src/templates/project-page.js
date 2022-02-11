import React from "react";
import { graphql } from "gatsby";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/layout/layout";

const ProjectPageTemplate = ({ name, banner }) => {
  return <div>{name}</div>;
};

const ProjectPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;
  const { name, banner } = frontmatter;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/projects" underline="hover" color="inherit">
          Projects
        </Link>
        <Typography color="text.primary">{"A"}</Typography>
      </Breadcrumbs>
      <ProjectPageTemplate name={name} banner={banner} />
    </Layout>
  );
};

const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name: projectName
        banner: projectBanner
        description: projectDescription
      }
    }
  }
`;

const projectMarkdownFrontmatterFragment = graphql`
  fragment ProjectMarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      name: projectName
      banner: projectBanner
      description: projectDescription
    }
  }
`;

export default ProjectPage;
export {
  ProjectPageTemplate,
  projectPageQuery,
  projectMarkdownFrontmatterFragment,
};
