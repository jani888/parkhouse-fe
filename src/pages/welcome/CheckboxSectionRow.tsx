import {
  ButtonBase,
  Checkbox,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import React from "react";

export function CheckboxSectionRow({
  title,
  subtitle,
  icon,
  onClick,
  checked,
}: {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  onClick(): void;
  checked: boolean;
}) {
  return (
    <Stack
      onClick={onClick}
      component={ButtonBase}
      direction="row"
      gap={2}
      sx={{
        borderRadius: 4,
        width: "100%",
        border: "1px solid #595959",
        borderColor: checked ? "primary.main" : "#595959",
        p: 1,
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          flexShrink: 0,
          flexGrow: 0,
          width: 64,
          height: 64,
          borderRadius: 3,
          backgroundColor: "primary.main",
        }}
      >
        {icon}
      </Stack>
      <Stack direction="column" width="100%" textAlign="left">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
      </Stack>
      <Checkbox
        sx={{ svg: { fill: !checked ? "#595959" : undefined } }}
        checked={checked}
      ></Checkbox>
    </Stack>
  );
}
