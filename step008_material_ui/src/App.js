import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import ProTip2 from './ProTip2';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      {/* box with margin at y direction */}
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          React App example
        </Typography>
        <ProTip />
        <ProTip2 />
        <Copyright />
      </Box>
    </Container>
  );
}
