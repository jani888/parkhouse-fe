import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { BackButton } from "../../components/BackButton";
import { BlueSquare } from "../../components/BlueSquare";
import { DateLabels } from "../../components/DateLabels";
import React from "react";

export function ReservationPage() {
  const date = new Date();
  return (
    <Stack gap={2} height="100%">
      <Typography variant="h1">
        <BackButton to="/pwa/home" />
        Foglalás
      </Typography>

      <Stack direction="row" justifyContent="center">
        <BlueSquare size="large">
          <DateLabels size="large" value={date} />
        </BlueSquare>
      </Stack>

      <List>
        <ListItem>
          <ListItemText primary="Emelet" secondary="1. emelet" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Parkolóhely" secondary="A123" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Autó" secondary="NYK-873" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dátum" secondary={date.toLocaleDateString()} />
        </ListItem>
      </List>

      <Button variant="contained" color="error" sx={{ mt: "auto" }}>
        Foglalás lemondása
      </Button>
    </Stack>
  );
}
