import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Money } from "../../components/Money";
import { WeeklySchedule } from "./WeeklySchedule";
import { UpcomingReservations } from "./UpcomingReservations";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

export function WelcomePage() {
  const navigate = useNavigate();
  const hasFixedSpace = false;
  return (
    <Stack direction="column" gap={6}>
      <Stack direction="row" gap={1} alignItems="center">
        <Avatar sx={{ bgcolor: "primary.300" }} variant="circular"></Avatar>
        <Typography variant="h1" color="text.primary">
          Szia Jani!
        </Typography>
        <Box ml="auto">
          <Money />
        </Box>
      </Stack>
      {hasFixedSpace ? <WeeklySchedule /> : <UpcomingReservations />}
      <Button
        variant="text"
        onClick={() => navigate("/pwa/cars")}
        startIcon={<EditIcon />}
      >
        Autóim kezelése
      </Button>
    </Stack>
  );
}
