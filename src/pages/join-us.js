import React from "react";
import { Typography } from "@mui/material";

import Layout from "../components/layout/layout";

const JoinUsPage = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" sx={{ padding: "2em 0 1em" }}>
        Join us
      </Typography>
      <Typography variant="body1" paragraph gutterBottom>
        What does it take to join us? Just show up! There are no dues and no
        attendance checks.
      </Typography>
      <Typography variant="body1" paragraph>
        All of our communication is done through{" "}
        <a href="https://tx.ag/dscslack">Slack</a>. Also subscribe to the{" "}
        <a href="https://tx.ag/dscmail">mailing list</a> to stay updated.
      </Typography>
    </Layout>
  );
};

export default JoinUsPage;
