import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BackButton } from "../../components/BackButton";
import { DirectionArrow } from "./DirectionArrow";
import { useParkingLevelQuery } from "../../generated/graphql";

export function ParkingLevelPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useParkingLevelQuery({
    variables: {
      id: id ?? "",
    },
  });
  if (!id) {
    return <h1>404</h1>;
  }
  const spaces = [
    {
      label: "A1",
      car: "default_car.png",
      arrived: false,
    },
    {
      label: "A2",
      car: undefined,
      arrived: false,
    },
    {
      label: "A3",
      car: "tdrc01_car09_a.png",
      arrived: false,
    },
    {
      label: "A4",
      car: "default_car.png",
      arrived: true,
    },
    {
      label: "A5",
      car: "default_car.png",
      arrived: false,
    },
    {
      label: "A6",
      car: "tdrc01_car08_b.png",
      arrived: true,
    },
    {
      label: "A7",
      car: "default_car.png",
      arrived: false,
    },
    {
      label: "A8",
      car: "default_car.png",
      arrived: true,
    },
    {
      label: "A9",
      car: "tdrc01_car09_f.png",
      arrived: true,
    },
    {
      label: "A10",
      car: "default_car.png",
      arrived: true,
    },
    {
      label: "A11",
      car: "default_car.png",
      arrived: true,
    },
    {
      label: "A12",
      car: undefined,
      arrived: false,
    },
    {
      label: "A13",
      car: "default_car.png",
      arrived: true,
    },
    {
      label: "A14",
      car: "default_car.png",
      arrived: false,
    },
    {
      label: "A15",
      car: "tdrc01_car01_b.png",
      arrived: false,
    },
    {
      label: "A16",
      car: "default_car.png",
      arrived: true,
    },
  ];
  const leftCol = data?.level.spaces.slice(0, data?.level.spaces.length / 2);
  const rightCol = data?.level.spaces.slice(
    data?.level.spaces.length / 2,
    data?.level.spaces.length
  );
  return (
    <Stack height="100%" gap={2}>
      <Typography variant="h1">
        <BackButton to="/pwa/parking" /> {data?.level.label}
      </Typography>
      <Typography
        color="#595959"
        variant="h6"
        fontSize={10}
        textAlign="center"
        textTransform="uppercase"
      >
        Kijárat
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 75px 1fr",
          gridTemplateRows: `repeat(${rightCol?.length}, 1fr)`,
          width: "100%",
          height: "100%",
          border: "1px solid #595959",
        }}
      >
        {leftCol?.map((space, index) => (
          <Box
            sx={{
              gridRow: index + 1,
              borderRight: "1px solid #595959",
              borderBottom: "1px solid #595959",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={space.label}
          >
            <Box
              width="70%"
              height="60%"
              borderRadius={3}
              sx={{
                background:
                  space.currentStatus !== "FREE"
                    ? `url('/cars/${
                        space.reservations?.[0]?.user.selectedGameCar?.image ??
                        space.owner?.selectedGameCar?.image ??
                        "default_car.png"
                      }')`
                    : undefined,
                backgroundRepeat: "no-repeat",
                opacity: ["FREE", "OCCUPIED"].includes(space.currentStatus)
                  ? 1
                  : 0.1,
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                transform: "rotate(180deg)",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              {space.currentStatus === "FREE" && space.label}
            </Box>
          </Box>
        ))}

        {rightCol?.map((space, index) => (
          <Box
            sx={{
              gridColumn: 3,
              gridRow: index + 1,
              borderLeft: "1px solid #595959",
              borderBottom: "1px solid #595959",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={space.label}
          >
            <Box
              width="70%"
              height="60%"
              borderRadius={3}
              sx={{
                background:
                  space.currentStatus !== "FREE"
                    ? `url('/cars/${
                        space.reservations?.[0]?.user.selectedGameCar?.image ??
                        space.owner?.selectedGameCar?.image ??
                        "default_car.png"
                      }')`
                    : undefined,
                backgroundRepeat: "no-repeat",
                opacity: ["FREE", "OCCUPIED"].includes(space.currentStatus)
                  ? 1
                  : 0.1,
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              {space.currentStatus === "FREE" && space.label}
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            girdColumn: 2,
            gridRowStart: 1,
            gridRowEnd: 99,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        ></Box>
      </Box>
      <Typography
        color="#595959"
        variant="h6"
        fontSize={10}
        textAlign="center"
        textTransform="uppercase"
      >
        Bejárat
      </Typography>
    </Stack>
  );
}
