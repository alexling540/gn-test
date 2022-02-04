import React from "react";
import { Grid, Typography } from "@mui/material";

import EventCard from "./eventCard";

const EventsCardGrid = ({ edges }) => {
  return edges.length === 0 ? (
    <Typography variant="body1" paragraph gutterBottom>
      No events
    </Typography>
  ) : (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      columnSpacing={4}
      rowSpacing={4}
      sx={{
        justifyContent: {
          xs: "center",
          md: "flex-start",
        },
        padding: "1em 0 1em",
      }}
    >
      {edges.map(({ node: { frontmatter, fields } }, idx) => {
        const { name, date, description, banner } = frontmatter;
        const { slug } = fields;

        return (
          <Grid item key={idx}>
            <EventCard
              name={name}
              timestamp={date}
              description={description}
              banner={banner}
              link={slug}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventsCardGrid;
