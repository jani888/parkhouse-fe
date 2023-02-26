import { useParkingLevelsQuery } from "../../generated/graphql";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ParkingLevel } from "./ParkingLevelPage";

export function DesktopParkingPage() {
  const { data } = useParkingLevelsQuery();

  const [level, setLevel] = useState("");
  useEffect(() => {
    if (!data) return;
    setLevel(data.levels[0].id);
  }, [data]);
  return (
    <Stack component={Container} maxWidth="sm" height="100%" p={4} gap={4}>
      <Typography variant="h1">Parkolóhelyek</Typography>
      <Stack direction="row" gap={2} height="100%">
        <Tabs
          sx={{
            flexShrink: 0,
            "& .MuiTabs-flexContainer": {
              borderBottom: "none",
            },
            "& button": {
              borderRadius: `8px`,
              color: (theme) => theme.palette.grey[600],
              minHeight: "auto",
              minWidth: "100%",
              py: 1.5,
              px: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              textAlign: "left",
              justifyContent: "flex-start",
            },
            "& button.Mui-selected": {
              color: (theme) => theme.palette.primary.main,
              background: "#171717",
            },
            "& button > svg": {
              marginBottom: "0px !important",
              marginRight: 1.25,
              marginTop: 1.25,
              height: 20,
              width: 20,
            },
            "& button > div > span": {
              display: "block",
            },
            "& > div > span": {
              display: "none",
            },
          }}
          orientation="vertical"
          variant="scrollable"
          value={level}
          onChange={(_, value) => setLevel(value)}
          aria-label="Vertical tabs example"
        >
          {data?.levels.map((level) => (
            <Tab
              sx={{
                color: "white",
                width: 200,
                py: 4,
                boxSizing: "border-box",
              }}
              value={level.id}
              key={level.id}
              label={
                <Grid container direction="column">
                  <Typography
                    component="div"
                    variant="caption"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {level.label}
                  </Typography>
                </Grid>
              }
            />
          ))}
        </Tabs>

        <Box
          sx={{
            p: 4,
            borderRadius: 4,
            background: "#171717",
            width: "100%",
            height: "100%",
          }}
        >
          <ParkingLevel hideBackButton id={level} />
        </Box>
      </Stack>
    </Stack>
  );
}
