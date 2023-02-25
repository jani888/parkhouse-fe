import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MobileMenu } from "../components/MobileMenu";
import React from "react";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import { useNavigate } from "react-router";

function ActiveReservation() {
  const navigate = useNavigate();
  return (
    <Stack
      onClick={() => navigate("/pwa/levels/2")}
      component={ButtonBase}
      gap={1}
      direction="row"
      justifyContent="space-between"
      sx={{
        height: "84px",
        px: 2,
        py: 1,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        background: "linear-gradient(301deg, #39ADEB 0%, #5800C9 97.58%)",
      }}
    >
      <Stack>
        <Typography variant="h1" textAlign="left">
          A2
        </Typography>
        <Typography variant="h5" textAlign="left">
          2. emelet
        </Typography>
      </Stack>

      <IconButton>
        <MapTwoToneIcon sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}

export function PwaLayout() {
  return (
    <Stack sx={{ backgroundColor: "background.default", height: "100svh" }}>
      <ActiveReservation />
      <Box p={4} height="100%" overflow="auto">
        <Outlet />
      </Box>
      <MobileMenu />
    </Stack>
  );
}
