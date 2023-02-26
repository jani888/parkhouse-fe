import { Stack, Typography } from "@mui/material";
import React from "react";

export function Section({
  label,
  children,
  id,
}: {
  label: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Stack gap={2} direction="column" width="100%" id={id}>
      <Typography variant="h2">{label}</Typography>
      <Stack direction="column" gap={2} width="100%">
        {children}
      </Stack>
    </Stack>
  );
}
