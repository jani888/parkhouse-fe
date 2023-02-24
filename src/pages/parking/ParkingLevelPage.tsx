import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import React from "react";

export function ParkingLevelPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) {
    return <h1>404</h1>;
  }
  const spaces = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
  ];
  const leftCol = spaces.slice(0, spaces.length / 2);
  const rightCol = spaces.slice(spaces.length / 2, spaces.length);
  return (
    <Stack height="100%">
      <Typography variant="h1">
        <IconButton onClick={() => navigate("/pwa/parking")}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </IconButton>{" "}
        {id}
      </Typography>
      <Typography
        color="#595959"
        variant="h6"
        fontSize={10}
        textAlign="center"
        textTransform="uppercase"
      >
        Bejárat
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
            key={space}
          >
            <Box
              width="70%"
              height="60%"
              borderRadius={3}
              sx={{
                backgroundColor: "primary.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              {space}
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
            key={space}
          >
            <Box
              width="70%"
              height="60%"
              borderRadius={3}
              sx={{
                backgroundColor: "primary.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              {space}
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
          <Box sx={{ height: "80%", borderRight: "2px dashed #595959" }} />
          <ExpandMoreRoundedIcon sx={{ mt: -2, color: "#595959" }} />
        </Box>
      </Box>
      <Typography
        color="#595959"
        variant="h6"
        fontSize={10}
        textAlign="center"
        textTransform="uppercase"
      >
        Kijárat
      </Typography>
    </Stack>
  );
}
