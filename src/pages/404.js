import React from "react";
import { Link } from "gatsby";
import { Button, Typography } from "@mui/material";

import Layout from "../components/layout/layout";

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          padding: "96px",
        }}
      >
        <title>Not found</title>
        <Typography variant="h4" style={headingStyles}>
          Page not found
        </Typography>
        <Typography variant="body1" paragraph style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn't find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Button component={Link} to="/">
            Go home
          </Button>
        </Typography>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
