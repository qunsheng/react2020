import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleDialogDemo from './SimpleDialogDemo';
import SimplePopper from './SimplePopper';

export default function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React App example
          </Typography>
        </Box>

        <SimpleDialogDemo />
        <p></p>
        <SimplePopper />
      </Container>
    </div>
  );
}

