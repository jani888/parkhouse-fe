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
import {
  MyReservationsDocument,
  ReservationType,
  useFreeSpacesQuery,
  useMakeReservationMutation,
  useMyCarsQuery,
} from "../../generated/graphql";

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
  const [time, setTime] = useState<ReservationType>("ALL_DAY");
  const [carId, setCarId] = useState("");
  const [date, setDate] = useState("");
  const [reserved, setReserved] = useState(false);
  const [makeReservation, { loading, data: reservation }] =
    useMakeReservationMutation({ refetchQueries: [MyReservationsDocument] });
  const { data: cars } = useMyCarsQuery();
  const { data: freeSpaces } = useFreeSpacesQuery({
    variables: {
      date: getDate(),
    },
  });

  const onlyWaitListSpaceAvailable = freeSpaces?.freeParkingSpaces === 0;

  function getDate() {
    switch (dateType) {
      case "today":
        return new Date().toISOString().slice(0, 10) + "T00:00:00Z";
      case "tomorrow":
        return (
          new Date(new Date().setDate(new Date().getDate() + 1))
            .toISOString()
            .slice(0, 10) + "T00:00:00Z"
        );
      case "custom":
        return date + "T00:00:00Z";
    }
  }

  async function handleReservation() {
    const date = getDate();
    await makeReservation({
      variables: {
        date,
        carId,
        type: time,
      },
    });
    setReserved(true);
  }

  function close() {
    setReserved(false);
    onClose();
  }

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
      {reserved ? (
        <Stack height="100%" gap={1} p={2}>
          <Typography variant="h2" color="#002F59">
            Sikeres foglal??s
          </Typography>

          {onlyWaitListSpaceAvailable ? (
            <>
              <Typography
                variant="h1"
                fontSize={64}
                color="#002F59"
                textAlign="center"
                mt={12}
              >
                #2
              </Typography>
              <Typography
                variant="h3"
                color="#002F59"
                textAlign="center"
                mt={1}
              >
                2 foglal??s van el??tted a v??r??list??n
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant="h1"
                fontSize={64}
                color="#002F59"
                textAlign="center"
                mt={12}
              >
                {reservation?.makeReservation.parkingSpace.label}
              </Typography>
              <Typography
                variant="h3"
                color="#002F59"
                textAlign="center"
                mt={1}
              >
                {reservation?.makeReservation.parkingSpace.level.label}
              </Typography>
            </>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: "auto" }}
            onClick={close}
          >
            Bez??r??s
          </Button>
          <Button color="error">Foglal??s lemond??sa</Button>
        </Stack>
      ) : (
        <Stack height="100%" gap={1} p={2}>
          <Typography variant="h2" color="#002F59">
            ??j foglal??s
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
                label="Ma (02.26)"
              />
              <FormControlLabel
                value="tomorrow"
                control={<Radio />}
                label="Holnap (02.27)"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Egy??b"
              />
            </RadioGroup>
          </FormControl>
          {dateType === "custom" && (
            <TextField
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              label="Egy??ni d??tum"
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
            <RadioGroup
              value={time}
              onChange={(_, value) => setTime(value as ReservationType)}
            >
              <FormControlLabel
                value="ALL_DAY"
                control={<Radio />}
                label="Eg??sz nap"
              />
              <FormControlLabel
                value="MORNING"
                control={<Radio />}
                label="D??lel??tt"
              />
              <FormControlLabel
                value="AFTERNOON"
                control={<Radio />}
                label="D??lut??n"
              />
            </RadioGroup>
          </FormControl>

          <Divider />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Aut??</InputLabel>
            <Select
              sx={{
                color: "#242424",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={carId}
              label="Aut??"
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
              onChange={(e) => setCarId(e.target.value)}
            >
              {cars?.myUser.cars.map((car) => (
                <MenuItem key={car.id} sx={{ color: "#242424" }} value={car.id}>
                  {car.name} ({car.licencePlate})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography
            mt="auto"
            variant="body2"
            fontSize={12}
            fontWeight={600}
            color="#242424"
            textAlign="center"
          >
            {onlyWaitListSpaceAvailable ? (
              <p>
                ( A kiv??lasztott id??pontban m??r nincs szabad hely, de
                feliratkozhat a v??r??list??ra. )
              </p>
            ) : (
              <p>Szabad helyek: {freeSpaces?.freeParkingSpaces}</p>
            )}
          </Typography>

          <Button
            onClick={handleReservation}
            variant="contained"
            color={onlyWaitListSpaceAvailable ? "warning" : "primary"}
          >
            {onlyWaitListSpaceAvailable
              ? "Feliratkoz??s v??r??list??ra"
              : "Foglal??s"}
          </Button>
        </Stack>
      )}
    </SwipeableDrawer>
  );
}
