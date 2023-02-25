import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, Chip, Stack, Tab, Tabs, Typography } from "@mui/material";
import GarageIcon from "@mui/icons-material/Garage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React from "react";
import { Car } from "./Car";
import { Money } from "../../components/Money";

export function GamePage() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const cars = [
    "tdrc01_car01_b.png",
    "tdrc01_car01_e.png",
    "tdrc01_car01_f.png",
    "tdrc01_car03_a.png",
    "tdrc01_car03_c.png",
    "tdrc01_car03_d.png",
  ];

  function setTab(val: string) {
    navigate("/pwa/game/" + val);
  }

  function handleCarChange(car: string) {}

  function handleCarBuy(car: string) {}

  return (
    <Stack m={-4} sx={{ height: "calc(100% + 4rem)", gap: 2 }}>
      <Typography variant="h1" pt={4} pl={3}>
        🕹 Játék autók
      </Typography>
      <Tabs
        sx={{ flexShrink: 0 }}
        value={tab}
        onChange={(_, value) => setTab(value)}
        variant="fullWidth"
      >
        <Tab
          iconPosition="start"
          value="garage"
          sx={{ color: "white" }}
          icon={<GarageIcon />}
          label="Garázs"
        />
        <Tab
          iconPosition="start"
          value="shop"
          sx={{ color: "white" }}
          icon={<LocalOfferIcon />}
          label="Autókereskedő"
        />
      </Tabs>

      {tab === "garage" && (
        <>
          {cars.length === 0 && (
            <Stack justifyContent="center" gap={2} p={2}>
              <Typography variant="h3" textAlign="center">
                Még nincs játékautód
              </Typography>
              <Typography variant="h5" textAlign="center">
                Ha lemondasz mások javára a parkolóhelyedről, azzal tokeneket
                gyűjthetsz, melyeket beválthatsz játékautókra. Ezek az autók
                megjelennek a parkoló térképen, és a toplistán is.
              </Typography>
            </Stack>
          )}
          <Box
            sx={{
              p: 2,
              display: "grid",
              height: "100%",
              gap: 2,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            {cars.map((car) => (
              <Car key={car} onClick={() => handleCarChange(car)} car={car} />
            ))}
          </Box>
        </>
      )}

      {tab === "shop" && (
        <Stack height="100%" p={2}>
          <Money />
          <Box
            sx={{
              p: 2,
              display: "grid",
              height: "100%",
              gap: 2,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            {cars.map((car) => (
              <Car key={car} onClick={() => handleCarBuy(car)} car={car} />
            ))}
          </Box>
        </Stack>
      )}
    </Stack>
  );
}
