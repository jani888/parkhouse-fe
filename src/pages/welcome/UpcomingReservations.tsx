import React, { useState } from "react";
import { Section } from "./Section";
import { SectionRow } from "./SectionRow";
import { Button } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { ReservationDialog } from "./ReservationDialog";
import { useNavigate } from "react-router";
import { DateLabels } from "../../components/DateLabels";

export function UpcomingReservations() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Section label="Következő foglalásaim">
        <SectionRow
          onClick={() => navigate("/pwa/reservations/resid")}
          title="A123"
          subtitle="P1 - 1. emelet"
          icon={<DateLabels value={new Date()} />}
        />
      </Section>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<EventNoteIcon />}
      >
        Új foglalás
      </Button>
      <ReservationDialog
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
