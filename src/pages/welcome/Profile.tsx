import React, { useContext, useState } from "react";
import {
  Avatar,
  Drawer,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SectionRow } from "./SectionRow";
import { useQuery } from "@apollo/client";
import { useGetMeQuery } from "../../generated/graphql";
import { JWTContext } from "../../JWTContextProvider";

export function Profile() {
  const [open, setOpen] = useState(false);
  const { setToken } = useContext(JWTContext);
  const { data } = useGetMeQuery();

  function openProfileSelector() {
    setOpen(true);
  }

  function selectUser(token: string) {
    setToken(token);
  }

  return (
    <>
      <Avatar
        onClick={openProfileSelector}
        sx={{ bgcolor: "primary.300" }}
        variant="circular"
      />
      <Typography
        onClick={openProfileSelector}
        variant="h1"
        color="text.primary"
      >
        Szia {data?.myUser.name}!
      </Typography>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#002F59",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Stack p={3} gap={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h1">Profil választás</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Stack>
          <Typography variant="h4">
            Válassz az előre beállított profilok közűl
          </Typography>
          <SectionRow
            title="Jani"
            subtitle="Hidvégi János"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYjUyMzVjMzctY2E1Ny00NTVhLTgzYWMtOWI3YmQzMGQ2MDljIiwibmFtZSI6IkFkbWluIn0sImlhdCI6MTY3NzMzOTU2MCwiZXhwIjoxNjc4NjM1NTYwfQ.ENBGkr8wNZl5neB83DsnaVRnCfxI_UXmPrZkRIpxo8Ugi"
              )
            }
          />
          <SectionRow
            title="Jani"
            subtitle="Hidvégi János"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMGE3YWM4MDktNzYwOS00NzlhLThjNjYtYWY5MThjNjdkYWY5IiwibmFtZSI6Ikh1Z2gifSwiaWF0IjoxNjc3MzM2Njc4LCJleHAiOjE2Nzg2MzI2Nzh9.VvuwHpPBq2Hs9pe2_4LiSWR5XLUdYQ9vcPZoCL1GU2Y"
              )
            }
          />
          <SectionRow
            title="Jani"
            subtitle="Hidvégi János"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMGE3YWM4MDktNzYwOS00NzlhLThjNjYtYWY5MThjNjdkYWY5IiwibmFtZSI6Ikh1Z2gifSwiaWF0IjoxNjc3MzM2Njc4LCJleHAiOjE2Nzg2MzI2Nzh9.VvuwHpPBq2Hs9pe2_4LiSWR5XLUdYQ9vcPZoCL1GU2Y"
              )
            }
          />
        </Stack>
      </Drawer>
    </>
  );
}
