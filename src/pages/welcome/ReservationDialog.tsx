import React, { useState } from "react";
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

export function ReservationDialog({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose(): void;
  onOpen(): void;
}) {
  const [dateType, setDateType] = useState("today");
  const [time, setTime] = useState("all_day");
  const [car, setCar] = useState("nyk-873");
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
      <Stack height="100%" gap={1} p={2}>
        <Typography variant="h2" color="#002F59">
          Új foglalás
        </Typography>
        <FormControl
          sx={{
            mt: 2,
            ".MuiFormControlLabel-label": {
              color: "#242424",
              fontWeight: 900,
              fontSize: 12,
            },
          }}
        >
          <RadioGroup
            value={dateType}
            onChange={(_, value) => setDateType(value)}
          >
            <FormControlLabel
              value="today"
              control={<Radio />}
              label="Ma (02.24)"
            />
            <FormControlLabel
              value="tomorrow"
              control={<Radio />}
              label="Holnap (02.05)"
            />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="Egyéb"
            />
          </RadioGroup>
        </FormControl>
        {dateType === "custom" && (
          <TextField
            fullWidth
            label="Egyéni dátum"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ "& input": { color: "#242424" } }}
          ></TextField>
        )}

        <Divider />

        <FormControl
          sx={{
            mt: 2,
            ".MuiFormControlLabel-label": {
              color: "#242424",
              fontWeight: 900,
              fontSize: 12,
            },
          }}
        >
          <RadioGroup value={time} onChange={(_, value) => setTime(value)}>
            <FormControlLabel
              value="all_day"
              control={<Radio />}
              label="Egész nap"
            />
            <FormControlLabel
              value="morning"
              control={<Radio />}
              label="Délelőtt"
            />
            <FormControlLabel
              value="afternoon"
              control={<Radio />}
              label="Délután"
            />
          </RadioGroup>
        </FormControl>

        <Divider />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Autó</InputLabel>
          <Select
            sx={{
              color: "#242424",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={car}
            label="Auto"
            MenuProps={{
              anchorOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
            }}
            onChange={(e) => setCar(e.target.value)}
          >
            <MenuItem sx={{ color: "#242424" }} value="nyk-873">
              NYK-873
            </MenuItem>
            <MenuItem sx={{ color: "#242424" }} value="abc-123">
              ABC-123
            </MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" sx={{ mt: "auto" }}>
          Foglalás
        </Button>
      </Stack>
    </SwipeableDrawer>
  );
}
