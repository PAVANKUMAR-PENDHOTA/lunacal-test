import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f1112",
      paper: "#191b1d"
    },
    text: {
      primary: "#E6E6E6",
      secondary: "#BFC4C8"
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    body2: { fontSize: 14 }
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    }
  }
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
