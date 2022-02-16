import React from "react";
import { Box, Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import shortcodes from "./shortcodes";

const ProjectPageTemplate = ({ name, banner, html, body }) => {
  return (
    <React.Fragment>
      <Box
        style={{
          background: banner
            ? `linear-gradient(90deg, rgb(255, 255, 255) 0%, transparent 25%, transparent 75%, rgb(255, 255, 255) 100%), url(${banner}) 0% 0%/cover`
            : "lightgrey",
        }}
        sx={{
          padding: { xs: "4em 16px", sm: "4em 24px" },
          margin: { xs: "0 -16px 32px", sm: "0 -24px 32px" },
        }}
      >
        <Typography variant="h4" component="h1">
          {name}
        </Typography>
      </Box>
      {body && (
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      )}
      {html}
    </React.Fragment>
  );
};

export default ProjectPageTemplate;
