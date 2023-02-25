import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { CarDialog } from "./CarDialog";
import { SectionRow } from "../welcome/SectionRow";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Section } from "../welcome/Section";

export function CarsPage() {
  const [open, setOpen] = useState(false);
  const [editedItem, setEditedItem] = useState<{
    name: string;
    licencePlate: string;
  }>();

  function handleSubmit() {}

  function handleEditClick(licencePlate: string) {
    setOpen(true);
    setEditedItem({
      licencePlate,
      name: "Név",
    });
  }

  function handleCreateClick() {
    setOpen(true);
    setEditedItem(undefined);
  }

  return (
    <Stack gap={2} height="100%">
      <Typography variant="h1">🏎 Saját autóim</Typography>
      <Section label="">
        <SectionRow
          onClick={() => handleEditClick("NYK-873")}
          title="NYK-873"
          subtitle="Alapértelmezett"
          icon={<DirectionsCarIcon sx={{ color: "white" }} fontSize="large" />}
        />
      </Section>
      <Button
        onClick={handleCreateClick}
        variant="contained"
        color="primary"
        sx={{ mt: "auto" }}
        startIcon={<AddIcon />}
      >
        Új autó
      </Button>
      <CarDialog
        onSubmit={handleSubmit}
        initialValues={editedItem}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
}
