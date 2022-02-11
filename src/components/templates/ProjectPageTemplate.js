import React from "react";
import { Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import shortcodes from "./shortcodes";

const ProjectTemplate = ({ name, banner, html, body }) => {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </React.Fragment>
  );
};

export default ProjectTemplate;
