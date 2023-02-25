import { Stack } from "@mui/material";
import React from "react";

export function BlueSquare({
  children,
  size = "medium",
}: {
  children: JSX.Element;
  size?: "large" | "medium";
}) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        flexShrink: 0,
        flexGrow: 0,
        width: size === "medium" ? 64 : 128,
        height: size === "medium" ? 64 : 128,
        borderRadius: 3,
        backgroundColor: "primary.main",
      }}
    >
      {children}
    </Stack>
  );
}
