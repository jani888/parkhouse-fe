import { useNavigate } from "react-router";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";

export function BackButton({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate(to)}>
      <ArrowBackIosNewIcon sx={{ color: "white" }} />
    </IconButton>
  );
}
