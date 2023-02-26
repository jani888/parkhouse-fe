import { Box } from "@mui/material";
import React from "react";

export function ActiveIndicator() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 2,
        width: 20,
        height: 4,
        left: "50%",
        transform: "translateX(-50%)",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        bgcolor: "primary.main",
      }}
    ></Box>
  );
}
