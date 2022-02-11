import React from "react";
import { Typography } from "@mui/material";

export default {
  h1: (props) => <Typography variant="h4" component="h1" {...props} />,
  h2: (props) => <Typography variant="h5" component="h2" {...props} />,
  h3: (props) => <Typography variant="h6" component="h3" {...props} />,
  p: (props) => <Typography variant="body1" paragraph {...props} />,
};
