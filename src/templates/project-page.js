import React from "react";
import { graphql } from "gatsby";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/layout/layout";
import ProjectPageTemplate from "../components/templates/project-template";

const ProjectPage = ({ data: { mdx } }) => {
  const { frontmatter, body } = mdx;
  const { name, banner } = frontmatter;

  return (
    <Layout>
      <Breadcrumbs sx={{ padding: "2em 0 1em" }}>
        <Link to="/projects" underline="hover" color="inherit">
          Projects
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
      <ProjectPageTemplate name={name} banner={banner} html={body} />
    </Layout>
  );
};

// const projectPageQuery = graphql`
//   query ProjectPage($id: String!) {
//     mdx(id: { eq: $id }) {
//       html
//       frontmatter {
//         name: projectName
//         banner: projectBanner
//         description: projectDescription
//       }
//     }
//   }
// `;

const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name: projectName
        banner: projectBanner
        description: projectDescription
      }
    }
  }
`;

export default ProjectPage;
export { pageQuery };
