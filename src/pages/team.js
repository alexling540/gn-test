import React from "react";
import { List, Typography } from "@mui/material";

import Layout from "../components/layout/layout";
import MemberListItem from "../components/memberListItem";

const TeamPage = () => {
  return (
    <Layout>
      <Typography variant="h4" sx={{ padding: "2em 0 1em" }}>
        Team
      </Typography>
      <List>
        <MemberListItem
          name="test name"
          bio="this is a test bio"
          position="test position"
        />
      </List>
    </Layout>
  );
};

export default TeamPage;
