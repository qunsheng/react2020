import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleTabs from './SimpleTabs';

export default function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React App example
          </Typography>
        </Box>

        <SimpleTabs />

      </Container>
    </div>
  );
}

