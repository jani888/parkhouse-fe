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
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
  const afterTomorrow = new Date(new Date().setDate(new Date().getDate() + 2));
  return (
    <>
      <Section label="Következő foglalásaim">
        <SectionRow
          onClick={() => navigate("/pwa/reservations/resid")}
          title="A2"
          subtitle="2. emelet"
          icon={<DateLabels value={new Date()} />}
        />
        <SectionRow
          onClick={() => navigate("/pwa/reservations/resid")}
          title="A13"
          subtitle="1. emelet"
          icon={<DateLabels value={tomorrow} />}
        />
        <SectionRow
          onClick={() => navigate("/pwa/reservations/resid")}
          title="A15"
          subtitle="3. emelet"
          icon={<DateLabels value={afterTomorrow} />}
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
