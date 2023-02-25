import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Money } from "../../components/Money";
import { WeeklySchedule } from "./WeeklySchedule";
import { UpcomingReservations } from "./UpcomingReservations";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

export function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Stack direction="column" gap={6}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h1" color="text.primary">
          👋 Üdv!
        </Typography>
        <Money />
      </Stack>
      <UpcomingReservations />
      <WeeklySchedule />
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
