import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import GarageIcon from "@mui/icons-material/Garage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import { Car } from "./Car";
import {
  GameCarsDocument,
  GetMeDocument,
  MyGameCarsDocument,
  useBuyGameCarMutation,
  useGameCarsQuery,
  useGetMeQuery,
  useMyGameCarsQuery,
  useSelectGameCarMutation,
} from "../../generated/graphql";
import { Money } from "../../components/Money";

export function GamePage() {
  const { tab } = useParams();
  const { data: gameCars } = useGameCarsQuery();
  const { data: myCars } = useMyGameCarsQuery();
  const { data: user } = useGetMeQuery();
  const [buyCar] = useBuyGameCarMutation({
    refetchQueries: [GetMeDocument, GameCarsDocument, MyGameCarsDocument],
  });
  const [selectCar] = useSelectGameCarMutation({
    refetchQueries: [MyGameCarsDocument],
  });
  const navigate = useNavigate();

  function setTab(val: string) {
    navigate("/pwa/game/" + val);
  }

  function handleCarChange(carId: string) {
    selectCar({
      variables: {
        id: carId,
      },
    });
  }

  async function handleCarBuy(carId: string) {
    const car = gameCars?.gameCars.find((c) => c.id === carId);
    const money = user?.myUser.coin ?? 0;
    if (!car || money < car.price || car.ownedByMe) return;
    await buyCar({
      variables: {
        id: carId,
      },
    });
    setTab("garage");
  }

  return (
    <Stack m={-4} sx={{ height: "calc(100% + 4rem)", gap: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={4}
        px={3}
      >
        <Typography variant="h1">🕹 Játék autók</Typography>
        <Money />
      </Stack>
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
          {myCars?.myUser.ownedGameCars.length === 0 && (
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
            {myCars?.myUser.ownedGameCars.map((car) => (
              <Car
                selected={myCars?.myUser.selectedGameCar?.id === car.id}
                money={user?.myUser.coin ?? 0}
                key={car.id}
                onClick={() => handleCarChange(car.id)}
                car={{ ...car, ownedByMe: true }}
              />
            ))}
          </Box>
        </>
      )}

      {tab === "shop" && (
        <Stack height="100%" p={2}>
          <Box
            sx={{
              display: "grid",
              height: "100%",
              gap: 2,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            {gameCars?.gameCars.map((car) => (
              <Car
                money={user?.myUser.coin ?? 0}
                key={car.id}
                onClick={() => handleCarBuy(car.id)}
                car={car}
              />
            ))}
          </Box>
        </Stack>
      )}
    </Stack>
  );
}
