import * as React from "react";

import Layout from "../../components/layout";

import Typography from "@mui/material/Typography";

const EventsIndexPage = () => {
  return (
    <Layout>
      <Typography variant="h1">Events</Typography>
      <Typography variant="h2">Upcoming events</Typography>
      <Typography variant="h2">Previous events</Typography>
    </Layout>
  );
};

export default EventsIndexPage;
