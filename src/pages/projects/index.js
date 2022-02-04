import React from "react";
import { graphql } from "gatsby";
import { Grid, Typography } from "@mui/material";

import Layout from "../../components/layout/layout";
import ProjectCard from "../../components/projectCard";

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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        columnSpacing={3}
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
    </Layout>
  );
};

const projectsIndexPageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      edges {
        node {
          frontmatter {
            banner
            description
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
