import React from "react";
import { graphql } from "gatsby";
import { Grid, Typography } from "@mui/material";

import Layout from "../../components/layout/layout";
import Divider from "../../components/divider";
import ProjectCard from "../../components/projectCard";

const ProjectsCardGrid = ({ edges }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      columnSpacing={3}
      sx={{
        padding: "1em 0 1em",
      }}
    >
      {edges.map(({ node: { frontmatter, fields } }, idx) => {
        const { name, description, icon, banner } = frontmatter;
        const { slug } = fields;

        return (
          <Grid item key={idx}>
            <ProjectCard
              name={name}
              description={description}
              icon={icon}
              banner={banner}
              link={slug}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

const ProjectsIndexPage = ({ data: { current, previous } }) => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" sx={{ padding: "2em 0 1em" }}>
        Projects
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Current projects
      </Typography>
      <ProjectsCardGrid edges={current.edges} />
      <Divider />
      <Typography variant="h5" component="h2" gutterBottom>
        Previous projects
      </Typography>
      <ProjectsCardGrid edges={previous.edges} />
    </Layout>
  );
};

const projectsIndexPageQuery = graphql`
  query {
    current: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { projectIsActive: { eq: true } }
      }
    ) {
      edges {
        node {
          ...ProjectMarkdownFrontmatterFragment
          fields {
            slug
          }
        }
      }
    }
    previous: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { projectIsActive: { eq: false } }
      }
    ) {
      edges {
        node {
          ...ProjectMarkdownFrontmatterFragment
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
