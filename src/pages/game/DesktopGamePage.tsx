import { Container } from "@mui/material";
import { GamePage } from "./GamePage";
import React from "react";

export function DesktopGamePage() {
  return (
    <Container maxWidth="md" sx={{ p: 4 }}>
      <GamePage basePath="" />
    </Container>
  );
}
