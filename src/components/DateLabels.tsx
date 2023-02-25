import { Stack, Typography } from "@mui/material";
import React from "react";

export function DateLabels({
  value,
  size = "medium",
}: {
  value: Date;
  size?: "large" | "medium";
}) {
  return (
    <Stack direction="column" alignItems="center">
      <Typography
        fontSize={size === "medium" ? 18 : 48}
        color="white"
        fontWeight="bold"
      >
        {value.toLocaleString(undefined, { day: "2-digit" })}
      </Typography>
      <Typography fontSize={size === "medium" ? 12 : 18} color="white">
        {value.toLocaleString(undefined, { month: "short" })}
      </Typography>
    </Stack>
  );
}
