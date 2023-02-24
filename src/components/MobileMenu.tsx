import { ButtonBase, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
function MenuItem({ children, icon }: { children: string; icon: JSX.Element }) {
  return (
    <ButtonBase
      sx={{ width: "100%", display: "flex", flexDirection: "column", py: 2 }}
    >
      {icon}
    </ButtonBase>
  );
}

export function MobileMenu() {
  return (
    <Stack direction="row" height={64} sx={{ backgroundColor: "#171717" }}>
      <NavLink to="/pwa/home" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <HomeTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Home
          </MenuItem>
        )}
      </NavLink>
      <NavLink to="/pwa/parking" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <MapTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Parking
          </MenuItem>
        )}
      </NavLink>
      <NavLink to="/pwa/game/garage" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <DirectionsCarFilledTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Cars
          </MenuItem>
        )}
      </NavLink>
    </Stack>
  );
}
