import React from "react";
import { Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import shortcodes from "./shortcodes";

const ProjectPageTemplate = ({ name, banner, html, body }) => {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      {body && (
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      )}
      {html}
      {html && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
    </React.Fragment>
  );
};

export default ProjectPageTemplate;
