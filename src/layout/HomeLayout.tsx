import { Stack } from "@mui/material";
import { DesktopMenu } from "../components/menu/DesktopMenu";
import { Outlet } from "react-router-dom";
import React from "react";

export function HomeLayout() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <DesktopMenu />
      <Outlet />
    </Stack>
  );
}
