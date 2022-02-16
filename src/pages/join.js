import React from "react";
import { Typography } from "@mui/material";

import Layout from "../components/layout/layout";

const JoinPage = () => {
  return (
    <Layout>
      <Typography variant="h5" component="h2">
        Slack
      </Typography>
      <a href="https://tx.ag/dscslack">https://tx.ag/dscslack</a>
      <Typography variant="h5" component="h2">
        Mailing list
      </Typography>
      <a href="https://tx.ag/dscmail">https://tx.ag/dscmail</a>
    </Layout>
  );
};

export default JoinPage;
