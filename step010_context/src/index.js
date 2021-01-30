import React from "react";
import ReactDOM from "react-dom";
/*
  Material-UI provides an optional CssBaseline component. It fixes some inconsistencies 
  across browsers and devices while providing slightly more opinionated resets to common HTML elements
*/
import CssBaseline from "@material-ui/core/CssBaseline";
// Them Provider
import { ThemeProvider } from "@material-ui/core/styles";
// App
import App from "./App";
// them
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
