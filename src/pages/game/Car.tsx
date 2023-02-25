import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function Car({
  onClick,
  car,
  money,
  selected,
}: {
  onClick: () => void;
  car: { name: string; price: number; ownedByMe: boolean; image: string };
  money: number;
  selected?: boolean;
}) {
  return (
    <Stack
      onClick={onClick}
      component={ButtonBase}
      alignItems="center"
      sx={{
        borderRadius: 2,
        border: "1px solid",
        borderColor: car.ownedByMe
          ? "primary.main"
          : money > car.price
          ? "grey.600"
          : "grey.700",
        p: 2,
        width: "100%",
        height: "100%",
      }}
    >
      {selected && (
        <CheckCircleIcon
          color="primary"
          fontSize="large"
          sx={{ position: "absolute", right: -12, top: -12 }}
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "160px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url('/cars/${car.image}')`,
        }}
      />
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        {car.name}
      </Typography>
      {!car.ownedByMe && (
        <Stack direction="row" alignItems="center" gap={0.5}>
          <MonetizationOnIcon fontSize="small" color="warning" /> {car.price}
        </Stack>
      )}
    </Stack>
  );
}
