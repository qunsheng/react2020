import React from "react";

// define themes object
export const themes = {
  light: {
    // foreground: "#000000",
    // foreground: "red",
    // background: "#eeeeee",
    color: "default"
  },
  dark: {
    // foreground: "#ffffff",
    // background: "#222222",
    color: "primary"
  },
};

/*
Use React.createContext API to creates a Context object ThemeContext. 
When React renders a component that subscribes to this Context object 
it will read the current context value from the closest matching Provider 
above it in the tree.

The defaultValue argument is only used when a component does not have a 
matching Provider above it in the tree. This can be helpful for testing 
components in isolation without wrapping them. np
*/
export const ThemeContext = React.createContext(
  themes.dark // default value
  // themes.light
);
