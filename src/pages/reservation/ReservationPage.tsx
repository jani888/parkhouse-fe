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
import { useParams } from "react-router-dom";
import {
  MyReservationsDocument,
  useCancelReservationMutation,
  useReservationQuery,
} from "../../generated/graphql";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";

export function ReservationPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data } = useReservationQuery({ variables: { id: id ?? "" } });
  const [cancelReservation, { loading }] = useCancelReservationMutation({
    variables: { id: id ?? "" },
    refetchQueries: [MyReservationsDocument],
    onCompleted() {
      navigate("/pwa/home");
    },
  });

  const date = new Date(data?.reservation.date ?? new Date());
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
          <ListItemText
            primary="Emelet"
            secondary={data?.reservation.parkingSpace.level.label ?? ""}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Parkolóhely"
            secondary={data?.reservation.parkingSpace.label ?? ""}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Autó"
            secondary={data?.reservation.car.licencePlate ?? ""}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dátum" secondary={date.toLocaleDateString()} />
        </ListItem>
      </List>

      <LoadingButton
        loading={loading}
        variant="contained"
        color="error"
        sx={{ mt: "auto" }}
        onClick={() => cancelReservation()}
      >
        Foglalás lemondása
      </LoadingButton>
    </Stack>
  );
}
