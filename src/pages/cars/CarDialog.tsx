import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";

export function CarDialog({
  open,
  onClose,
  onOpen,
  onSubmit,
  initialValues,
}: {
  open: boolean;
  onClose(): void;
  onOpen(): void;
  onSubmit(): void;
  initialValues?: {
    name: string;
    licencePlate: string;
  };
}) {
  const [licencePlate, setLicencePlate] = useState(
    initialValues?.licencePlate ?? ""
  );
  const [name, setName] = useState(initialValues?.name ?? "");

  useEffect(() => {
    if (!initialValues) {
      setName("");
      setLicencePlate("");
      return;
    }
    setName(initialValues.name);
    setLicencePlate(initialValues.licencePlate);
  }, [initialValues]);

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
        />
      </Stack>
      <Stack height="100%" gap={1} p={2}>
        <Typography variant="h2" color="#002F59">
          {initialValues ? "Autó szerkesztése" : "Új autó"}
        </Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ input: { color: "#002F59" }, mt: 2 }}
          fullWidth
          label="Autó neve"
        />
        <TextField
          value={licencePlate}
          onChange={(e) => setLicencePlate(e.target.value)}
          sx={{ input: { color: "#002F59" }, mt: 2 }}
          fullWidth
          label="Rendszám"
          helperText="Formátum: ABC-123 vagy AA-BB-123"
          placeholder="ABC-123"
        />

        <Button
          onClick={() => onClose()}
          variant="text"
          color="secondary"
          sx={{ mt: "auto" }}
        >
          Mégsem
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
          onClick={onSubmit}
        >
          Mentés
        </Button>
      </Stack>
    </SwipeableDrawer>
  );
}
