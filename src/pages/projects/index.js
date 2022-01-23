import React from "react";

import Layout from "../../components/layout/layout";

import Typography from "@mui/material/Typography";

const ProjectsIndexPage = () => {
  return (
    <Layout>
      <Typography variant="h4">Projects</Typography>
      <Typography variant="h5">Ongoing projects</Typography>
      <Typography variant="h5">Previous projects</Typography>
    </Layout>
  );
};

export default ProjectsIndexPage;
