import React from "react";

import Typography from "@mui/material/Typography";

import Layout from "../../components/layout/layout";

const EventsIndexPage = () => {
  return (
    <Layout>
      <Typography variant="h4">Events</Typography>
      <Typography variant="h5">Upcoming events</Typography>
      <Typography variant="h5">Previous events</Typography>
    </Layout>
  );
};

export default EventsIndexPage;
