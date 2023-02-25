import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { CarDialog } from "./CarDialog";
import { SectionRow } from "../welcome/SectionRow";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {
  MyCarsDocument,
  useAddCarMutation,
  useMyCarsQuery,
  useRemoveCarMutation,
  useUpdateCarMutation,
} from "../../generated/graphql";

export function CarsPage() {
  const { data } = useMyCarsQuery();
  const [addCar, { loading: createLoading }] = useAddCarMutation({
    refetchQueries: [MyCarsDocument],
  });
  const [updateCar, { loading: updateLoading }] = useUpdateCarMutation({
    refetchQueries: [MyCarsDocument],
  });
  const [removeCar, { loading: deleteLoading }] = useRemoveCarMutation({
    refetchQueries: [MyCarsDocument],
  });
  const loading = createLoading || updateLoading;
  const [open, setOpen] = useState(false);
  const [editedItem, setEditedItem] = useState<{
    id: string;
    name: string;
    licencePlate: string;
  }>();

  async function handleSubmit(values: { name: string; licencePlate: string }) {
    if (editedItem?.id) {
      await updateCar({
        variables: {
          ...values,
          id: editedItem.id,
        },
      });
    } else {
      await addCar({
        variables: values,
      });
    }
    setOpen(false);
  }

  async function handleDelete() {
    if (!editedItem) return;
    await removeCar({
      variables: {
        id: editedItem.id,
      },
    });
    setOpen(false);
  }

  function handleEditClick(car: {
    id: string;
    name: string;
    licencePlate: string;
  }) {
    setOpen(true);
    setEditedItem(car);
  }

  function handleCreateClick() {
    setOpen(true);
    setEditedItem(undefined);
  }

  return (
    <Stack gap={2} height="100%">
      <Typography variant="h1">🏎 Saját autóim</Typography>
      {data?.myUser.cars.map((car) => (
        <SectionRow
          key={car.id}
          onClick={() => handleEditClick(car)}
          title={car.name}
          subtitle={car.licencePlate}
          icon={<DirectionsCarIcon sx={{ color: "white" }} fontSize="large" />}
        />
      ))}
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
        deleteLoading={deleteLoading}
        loading={loading}
        onSubmit={handleSubmit}
        initialValues={editedItem}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
