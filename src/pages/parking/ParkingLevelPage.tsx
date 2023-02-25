import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import React from "react";
import { BackButton } from "../../components/BackButton";

export function ParkingLevelPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <h1>404</h1>;
  }
  const spaces = [
    {
      label: "A1",
      car: undefined,
    },
    {
      label: "A2",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A3",
      car: "tdrc01_car04_a.png",
    },
    {
      label: "A4",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A5",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A6",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A7",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A8",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A9",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A10",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A11",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A12",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A13",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A14",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A15",
      car: "tdrc01_car03_d.png",
    },
    {
      label: "A16",
      car: "tdrc01_car03_d.png",
    },
  ];
  const leftCol = spaces.slice(0, spaces.length / 2);
  const rightCol = spaces.slice(spaces.length / 2, spaces.length);
  return (
    <Stack height="100%">
      <Typography variant="h1">
        <BackButton to="/pwa/parking" /> {id}
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
          gridTemplateRows: `repeat(${rightCol.length}, 1fr)`,
          width: "100%",
          height: "100%",
          border: "1px solid #595959",
        }}
      >
        {leftCol.map((space, index) => (
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
                background: space.car ? `url('/cars/${space.car}')` : undefined,
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
                transform: space.car ? "rotate(180deg)" : undefined,
              }}
            >
              {!space.car && space.label}
            </Box>
          </Box>
        ))}

        {rightCol.map((space, index) => (
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
                background: space.car ? `url('/cars/${space.car}')` : undefined,
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              {!space.car && space.label}
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            girdColumn: 2,
            gridRowStart: 1,
            gridRowEnd: 99,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ExpandMoreRoundedIcon
            sx={{ color: "#595959", transform: "rotate(180deg)" }}
          />
          <Box
            sx={{ height: "80%", borderRight: "2px dashed #595959", mt: -2 }}
          />
        </Box>
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
