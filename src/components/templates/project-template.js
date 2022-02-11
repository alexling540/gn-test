import React from "react";
import { Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const ProjectTemplate = ({ name, banner, html }) => {
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
        <MDXRenderer>{html}</MDXRenderer>
      </MDXProvider>
    </React.Fragment>
  );
};

export default ProjectTemplate;
