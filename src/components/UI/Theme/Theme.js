import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const Theme = (props) => {
  const ThemeColors = {
    primary: "#F19735",
    secondary: "#974806",
  };
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: ThemeColors.primary,
        dark: "#974806",
        contrastText: "#fff",
      },
      secondary: {
        main: ThemeColors.secondary,
        contrastText: "#fff",
      },
      error:{
        main: '#d32f2f',
        dark: '#ff5722',
      }
      
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default Theme;
