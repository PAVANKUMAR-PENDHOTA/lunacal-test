import React from "react";
import { Box, Container } from "@mui/material";
import LeftPanel from "./components/LeftPanel";
import RightWidgets from "./components/RightWidgets";
import "./index.css";

export default function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: "100vh",
        p: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#303439"
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "1200px" },
          height: { xs: "auto", md: "680px" },
          display: "grid",
          gridTemplateColumns: { md: "1fr 660px" },
          gap: 3,
        }}
      >
        <LeftPanel />
        <RightWidgets />
      </Box>
    </Container>
  );
}
