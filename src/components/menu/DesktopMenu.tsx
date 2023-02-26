import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetMeQuery } from "../../generated/graphql";
import { ReactComponent as Logo } from "../../Logo.svg";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./MobileMenu";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import VideogameAssetTwoToneIcon from "@mui/icons-material/VideogameAssetTwoTone";
import InsightsIcon from "@mui/icons-material/Insights";
import { ProfileSelector } from "../../pages/welcome/Profile";
import { ActiveIndicator } from "./ActiveIndicator";

export function DesktopMenu() {
  const [open, setOpen] = useState(false);
  const { data } = useGetMeQuery();
  return (
    <Stack
      px={2}
      direction="row"
      justifyContent="space-between"
      height={64}
      alignItems="center"
      sx={{ backgroundColor: "#171717" }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Logo style={{ height: 48, width: 48 }} />
        <Typography variant="h3" fontWeight={900}>
          ParkHouse
        </Typography>
      </Stack>
      <Stack direction="row">
        <NavLink to="/home" style={{ width: 96, position: "relative" }}>
          {({ isActive }) => (
            <>
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
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink
          id="parking-map"
          to="/parking"
          style={{ width: 96, position: "relative" }}
        >
          {({ isActive }) => (
            <>
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
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink
          id="gamification"
          to="/game/garage"
          style={{ width: 96, position: "relative" }}
        >
          {({ isActive }) => (
            <>
              <MenuItem
                icon={
                  <VideogameAssetTwoToneIcon
                    fontSize="large"
                    color={isActive ? "primary" : "secondary"}
                  />
                }
              >
                Cars
              </MenuItem>
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink
          id="insights"
          to="/insights"
          style={{ width: 96, position: "relative" }}
        >
          {({ isActive }) => (
            <>
              <MenuItem
                icon={
                  <InsightsIcon
                    fontSize="large"
                    color={isActive ? "primary" : "secondary"}
                  />
                }
              >
                Insights
              </MenuItem>
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
      </Stack>
      <Stack
        component={ButtonBase}
        onClick={() => setOpen(true)}
        py={1}
        pl={1}
        pr={2}
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ backgroundColor: "#272727", borderRadius: 100 }}
        id="profile-selector"
      >
        <Avatar sx={{ width: 34, height: 34 }} />
        <Typography variant="h4">{data?.myUser.name}</Typography>
      </Stack>
      <ProfileSelector open={open} onClose={() => setOpen(false)} />
    </Stack>
  );
}
