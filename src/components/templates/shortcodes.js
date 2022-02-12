import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const shortcodes = {
  h1: (props) => (
    <Typography variant="h4" component="h1">
      {props.children}
    </Typography>
  ),
  h2: (props) => (
    <Typography variant="h5" component="h2">
      {props.children}
    </Typography>
  ),
  h3: (props) => (
    <Typography variant="h6" component="h3">
      {props.children}
    </Typography>
  ),
  p: (props) => (
    <Typography variant="body1" paragraph>
      {props.children}
    </Typography>
  ),
  table: (props) => <Table>{props.children}</Table>,
  thead: (props) => <TableHead>{props.children}</TableHead>,
  tbody: (props) => <TableBody>{props.children}</TableBody>,
  tr: (props) => <TableRow>{props.children}</TableRow>,
  th: (props) => <TableCell>{props.children}</TableCell>,
  td: (props) => <TableCell>{props.children}</TableCell>,
};

export default shortcodes;
