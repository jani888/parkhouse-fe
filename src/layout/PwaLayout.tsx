import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../components/menu/MobileMenu";
import React from "react";

export function PwaLayout() {
  return (
    <Stack
      sx={{
        backgroundColor: "background.default",
        height: "calc(100svh - 64px)",
      }}
    >
      <Box p={4} height="100%" overflow="auto">
        <Outlet />
      </Box>
      <MobileMenu />
    </Stack>
  );
}
