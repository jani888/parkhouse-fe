import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React from "react";

export function Car({ onClick, car }: { onClick: () => void; car: string }) {
  return (
    <Stack
      onClick={onClick}
      component={ButtonBase}
      alignItems="center"
      sx={{
        borderRadius: 2,
        border: "1px solid",
        borderColor: "primary.main",
        p: 2,
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url('/cars/${car}')`,
        }}
      ></Box>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        Ferrari GT
      </Typography>
    </Stack>
  );
}
