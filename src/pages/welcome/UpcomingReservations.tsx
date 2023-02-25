import React, { useState } from "react";
import { Section } from "./Section";
import { SectionRow } from "./SectionRow";
import { Button } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { ReservationDialog } from "./ReservationDialog";
import { useNavigate } from "react-router";
import { DateLabels } from "../../components/DateLabels";
import { useMyReservationsQuery } from "../../generated/graphql";

export function UpcomingReservations() {
  const navigate = useNavigate();
  const { data } = useMyReservationsQuery();
  const [open, setOpen] = useState(false);
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
  const afterTomorrow = new Date(new Date().setDate(new Date().getDate() + 2));
  return (
    <>
      <Section label="Következő foglalásaim">
        <>
          {data?.myReservations.map((reservation) => (
            <SectionRow
              key={reservation.id}
              onClick={() => navigate(`/pwa/reservations/${reservation.id}`)}
              title={reservation.parkingSpace.label}
              subtitle={reservation.parkingSpace.level.label}
              icon={<DateLabels value={new Date(reservation.date)} />}
            />
          ))}
        </>
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
