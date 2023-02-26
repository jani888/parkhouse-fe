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
import { useGetMeQuery } from "../../generated/graphql";
import { JWTContext } from "../../JWTContextProvider";

export function ProfileSelector({
  open,
  onClose,
}: {
  open: boolean;
  onClose(): void;
}) {
  const { setToken } = useContext(JWTContext);

  function selectUser(token: string) {
    setToken(token);
    onClose();
  }
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#002F59",
        },
      }}
      open={open}
      onClose={onClose}
    >
      <Stack p={3} gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h1">Profil választás</Typography>
          <IconButton onClick={onClose}>
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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWRtaW4iLCJuYW1lIjoiQWRtaW4ifSwiaWF0IjoxNjc3MzQwMTkwLCJleHAiOjE2Nzg2MzYxOTB9.clY9jGEGtEdwYm4Mck9vERe0nuM9vlJP51M7_1Jk68o"
            )
          }
        />
        <SectionRow
          title="Jani"
          subtitle="Hidvégi János"
          icon={<Typography variant="h1">HJ</Typography>}
          onClick={() =>
            selectUser(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZmY1NDU2NTItNzUxYS00YjUzLWE1Y2EtNzU2M2YxNzBhN2IxIiwibmFtZSI6IlN0ZXBoYW5pZSJ9LCJpYXQiOjE2NzczNTQ5MjEsImV4cCI6MTY3ODY1MDkyMX0.TRE-GuL8M4aHZlMBpIj1n1sqWLOK5YECST41tOPrWgk"
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
  );
}

export function Profile() {
  const [open, setOpen] = useState(false);
  const { data } = useGetMeQuery();

  function openProfileSelector() {
    setOpen(true);
  }

  return (
    <>
      <Avatar
        src={data?.myUser.avatar ?? ""}
        onClick={openProfileSelector}
        sx={{ bgcolor: "primary.300" }}
        variant="rounded"
      />
      <Typography
        onClick={openProfileSelector}
        variant="h1"
        color="text.primary"
      >
        Szia {data?.myUser.name}!
      </Typography>
      <ProfileSelector open={open} onClose={() => setOpen(false)} />
    </>
  );
}
