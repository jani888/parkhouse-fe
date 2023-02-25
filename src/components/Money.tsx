import { useNavigate } from "react-router";
import { Chip } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React from "react";
import { useGetMeQuery } from "../generated/graphql";

export function Money() {
  const navigate = useNavigate();
  const { data } = useGetMeQuery();
  return (
    <Chip
      label={data?.myUser.coin}
      color="primary"
      icon={<MonetizationOnIcon />}
      onClick={() => navigate("/pwa/game/shop")}
    />
  );
}
