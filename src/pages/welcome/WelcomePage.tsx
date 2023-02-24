import { Box, Button, Stack, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Section } from "./Section";
import { SectionRow } from "./SectionRow";

export function WelcomePage() {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="column" gap={6}>
      <Typography variant="h1" color="text.primary">
        👋 Üdv!
      </Typography>
      <Section label="Következő foglalásaim">
        <SectionRow
          title="A123"
          subtitle="P1 - 1. emelet"
          icon={
            <Stack direction="column" alignItems="center">
              <Typography fontSize={18} color="white" fontWeight="bold">
                24
              </Typography>
              <Typography fontSize={12} color="white">
                Febr
              </Typography>
            </Stack>
          }
        />
      </Section>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<EventNoteIcon />}
      >
        Új foglalás
      </Button>

      <Section label="Autóim">
        <SectionRow
          title="NYK-873"
          subtitle="Alapértelmezett"
          icon={<DirectionsCarIcon sx={{ color: "white" }} fontSize="large" />}
        />
      </Section>

      <ReservationDialog
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
}

function ReservationDialog({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose(): void;
  onOpen(): void;
}) {
  return (
    <SwipeableDrawer
      container={window.document.body}
      anchor="bottom"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      disableSwipeToOpen={false}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          height: "70vh",
        },
      }}
    >
      <Stack direction="row" justifyContent="center" py={2}>
        <Box
          sx={{
            backgroundColor: "grey.300",
            borderRadius: 8,
            width: 100,
            height: 6,
          }}
        ></Box>
      </Stack>
      <Box p={2}>
        <Typography variant="h2" color="#002F59">
          Új foglalás
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
}
