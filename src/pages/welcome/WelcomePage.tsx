import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Section } from "./Section";
import { SectionRow } from "./SectionRow";
import EditIcon from "@mui/icons-material/Edit";
import { Money } from "../../components/Money";
import { WeeklySchedule } from "./WeeklySchedule";
import { UpcomingReservations } from "./UpcomingReservations";

export function WelcomePage() {
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

      <MyCars />
    </Stack>
  );
}

function MyCars() {
  return (
    <>
      <Section label="Autóim">
        <SectionRow
          onClick={() => console.error("Not implemented")}
          title="NYK-873"
          subtitle="Alapértelmezett"
          icon={<DirectionsCarIcon sx={{ color: "white" }} fontSize="large" />}
        />
      </Section>
      <Button variant="text" onClick={() => {}} startIcon={<EditIcon />}>
        Autoim kezelése
      </Button>
    </>
  );
}
