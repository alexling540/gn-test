import React from "react";
import { graphql } from "gatsby";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout/layout";

const ProjectPageTemplate = ({ name, banner, html }) => {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      <MDXProvider
        components={{
          h1: (props) => (
            <Typography variant="h4" component="h1">
              {props.children}
            </Typography>
          ),
          h2: (props) => <Typography variant="h5" component="h2" {...props} />,
          h3: (props) => (
            <Typography variant="h6" component="h3">
              {props.children}
            </Typography>
          ),
        }}
      >
        {html}
      </MDXProvider>
    </React.Fragment>
  );
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
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <ProjectPageTemplate name={name} banner={banner} html={html} />
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
