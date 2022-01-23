import React from "react";
import { Typography } from "@mui/material";

import Layout from "../../components/layout/layout";

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
