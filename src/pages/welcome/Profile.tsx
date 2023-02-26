import React, { useContext, useState } from "react";
import { Avatar, Drawer, IconButton, Stack, Typography } from "@mui/material";
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
          title="Admin"
          subtitle="Fix helye: A-100"
          icon={<Typography variant="h1">A</Typography>}
          onClick={() =>
            selectUser(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWRtaW4iLCJuYW1lIjoiQWRtaW4ifSwiaWF0IjoxNjc3MzQwMTkwLCJleHAiOjE2Nzg2MzYxOTB9.clY9jGEGtEdwYm4Mck9vERe0nuM9vlJP51M7_1Jk68o"
            )
          }
        />
        <SectionRow
          title="Wendy"
          subtitle="Nincs fix helye"
          icon={<Typography variant="h1">W</Typography>}
          color={"primary.dark"}
          onClick={() =>
            selectUser(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjYxYTdiOWEtMmE1ZC00NzBkLThlOWYtOTg0YzA1MmZlYWMxIiwibmFtZSI6IldlbmR5In0sImlhdCI6MTY3NzM2Nzg4NywiZXhwIjoxNjc4NjYzODg3fQ.83D2V_9IMDFI6MrTwKhkHiIHDxG_rGtP-ZR-Y-MN4H4"
            )
          }
        />
        <SectionRow
          title="Samanta"
          subtitle="Fix helye: A-108"
          icon={<Typography variant="h1">S</Typography>}
          onClick={() =>
            selectUser(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZGI0NTQ2YmEtMTZhMC00Zjc3LTllNTMtOThkY2Y0YzBhZDUxIiwibmFtZSI6IlNhbWFudGEifSwiaWF0IjoxNjc3MzY3Njc2LCJleHAiOjE2Nzg2NjM2NzZ9.MAolsQhZnGyaqkhhsLqiUyErj4nFa-0bBsASKK_fYT8"
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
