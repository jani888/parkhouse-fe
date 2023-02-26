import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Avatar, Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import GarageIcon from "@mui/icons-material/Garage";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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

function LeaderboardItem({
  rank,
  name,
  score,
  avatar,
}: {
  rank: number;
  name: string;
  score: number;
  avatar: string;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{ borderRadius: 3, p: 2 }}
      className={rank === 1 ? "primary-gradient" : ""}
    >
      <Avatar src={avatar} variant="rounded" />
      <Stack>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h4">{score} pont</Typography>
      </Stack>
      <Typography ml="auto" variant="h1">
        {rank}.
      </Typography>
    </Stack>
  );
}

export function Leaderboard() {
  return (
    <Stack gap={2} p={2}>
      <LeaderboardItem
        avatar="https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-1/19467798_1964562663773890_8673696812624405232_o.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=y9nWJ2HAxBwAX8uHO00&_nc_ht=scontent-vie1-1.xx&oh=00_AfDs_TFG0MnEFApzfzV0Jg2awuFinOpqAOibU4fcF0cFZg&oe=6421E40A"
        name="Kende Zoltán"
        score={165}
        rank={1}
      />
      <LeaderboardItem
        avatar="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/240454476_1543540892667041_2141766638032146073_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XizgxOH1DjYAX9LHo_I&_nc_ht=scontent-vie1-1.xx&oh=00_AfCAJFfOevmYCh0U1Pef2GHek3ulFbKQ51StxyIZ2w8R8Q&oe=63FF206C"
        name="Kostyál Bálint"
        score={140}
        rank={2}
      />
      <LeaderboardItem
        avatar="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/287323644_5660988197264885_5986812943244076327_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sbUY6uyMLj8AX-WJ_XY&_nc_ht=scontent-vie1-1.xx&oh=00_AfCfu-dxAsPU_iz4A7ojXdC-obkORbbnPKcO35V4vuEigQ&oe=63FF989A"
        name="Hidvégi János"
        score={120}
        rank={3}
      />
    </Stack>
  );
}

export function GamePage({ basePath = "/pwa" }: { basePath?: string }) {
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
    navigate(basePath + "/game/" + val);
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
        variant="scrollable"
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
          value="leaderboard"
          sx={{ color: "white" }}
          icon={<EmojiEventsIcon />}
          label="Heti Toplista"
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

      {tab === "leaderboard" && <Leaderboard />}
    </Stack>
  );
}
