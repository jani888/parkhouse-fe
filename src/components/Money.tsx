import { useNavigate } from "react-router";
import { Chip } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React from "react";

export function Money() {
  const navigate = useNavigate();
  return (
    <Chip
      label={165}
      color="primary"
      icon={<MonetizationOnIcon />}
      onClick={() => navigate("/pwa/game/shop")}
    />
  );
}
