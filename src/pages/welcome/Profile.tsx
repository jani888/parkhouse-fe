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

export function Profile() {
  const [open, setOpen] = useState(false);
  const { setToken } = useContext(JWTContext);
  const { data } = useGetMeQuery();

  function openProfileSelector() {
    setOpen(true);
  }

  function selectUser(token: string) {
    setToken(token);
    setOpen(false);
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
            title="Admin"
            subtitle="Admin"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWRtaW4iLCJuYW1lIjoiQWRtaW4ifSwiaWF0IjoxNjc3MzQwMTkwLCJleHAiOjE2Nzg2MzYxOTB9.clY9jGEGtEdwYm4Mck9vERe0nuM9vlJP51M7_1Jk68o"
              )
            }
          />
          <SectionRow
            title="Wendy"
            subtitle="Wendy Williams"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmM5ZjU5YzMtZDY4ZC00NmQxLTk2ZDktN2IzNjVhZDI3N2Y4IiwibmFtZSI6Ikl2YSJ9LCJpYXQiOjE2NzczNjc2MzEsImV4cCI6MTY3ODY2MzYzMX0.8-lWuJ3d9QVohO_aZy02aUb4U6G6oTE0ypjUdfqFPto"
              )
            }
          />
          <SectionRow
            title="Samanta"
            subtitle="Samanta Szabó"
            icon={<Typography variant="h1">HJ</Typography>}
            onClick={() =>
              selectUser(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZGI0NTQ2YmEtMTZhMC00Zjc3LTllNTMtOThkY2Y0YzBhZDUxIiwibmFtZSI6IlNhbWFudGEifSwiaWF0IjoxNjc3MzY3Njc2LCJleHAiOjE2Nzg2NjM2NzZ9.MAolsQhZnGyaqkhhsLqiUyErj4nFa-0bBsASKK_fYT8"
              )
            }
          />
        </Stack>
      </Drawer>
    </>
  );
}
