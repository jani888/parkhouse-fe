import { useGetMeQuery } from "../../generated/graphql";
import { Box, Container, Stack } from "@mui/material";
import { Tutorial } from "../../components/tutorial/Tutorial";
import { WeeklySchedule } from "../welcome/WeeklySchedule";
import { UpcomingReservations } from "../welcome/UpcomingReservations";
import { CarsPage } from "../cars/CarsPage";
import React from "react";

export function DashboardPage() {
  const { data } = useGetMeQuery();

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Tutorial />
      <Stack className="ms-first-step" direction="row" gap={2} p={4}>
        {data?.myUser.hasFixedParkingSpace ? (
          <WeeklySchedule />
        ) : (
          <UpcomingReservations />
        )}
        <Box width={300} sx={{ flexShrink: 0 }}>
          <CarsPage />
        </Box>
      </Stack>
    </Container>
  );
}
