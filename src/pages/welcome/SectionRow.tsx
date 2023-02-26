import { ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import React from "react";
import { BlueSquare } from "../../components/BlueSquare";

export function SectionRow({
  title,
  subtitle,
  icon,
  color,
  onClick,
}: {
  title: string;
  subtitle: string;
  color?: string;
  icon: JSX.Element;
  onClick(): void;
}) {
  return (
    <Stack
      onClick={onClick}
      component={ButtonBase}
      direction="row"
      gap={2}
      sx={{ borderRadius: 4, width: "100%", border: "1px solid #595959", p: 1 }}
    >
      <BlueSquare color={color}>{icon}</BlueSquare>
      <Stack direction="column" width="100%" textAlign="left">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
      </Stack>
      <IconButton>
        <ArrowForwardIosOutlined color="secondary" />
      </IconButton>
    </Stack>
  );
}
