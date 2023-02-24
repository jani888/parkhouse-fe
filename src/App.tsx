import React, { useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import {
  Box,
  ButtonBase,
  Container,
  CssBaseline,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./theme";
import { PwaLayout } from "./layout/PwaLayout";
import { WelcomePage } from "./pages/welcome/WelcomePage";
import { ParkingPage } from "./pages/parking/ParkingPage";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import GarageIcon from "@mui/icons-material/Garage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router";

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

function ParingLevelPage() {
  const { id } = useParams<{ id: string }>();
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
      <Typography variant="h1">{id}</Typography>
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

function GamePage() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const cars = [
    "tdrc01_car01_b.png",
    "tdrc01_car01_e.png",
    "tdrc01_car01_f.png",
  ];
  function setTab(val: string) {
    navigate("/pwa/game/" + val);
  }
  function handleCarChange(car: string) {}

  return (
    <Stack m={-4} sx={{ height: "calc(100% + 4rem)", gap: 2 }}>
      <Tabs
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
            <Stack
              onClick={() => handleCarChange(car)}
              key={car}
              component={ButtonBase}
              alignItems="center"
              sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor: "primary.main",
                p: 2,
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage: `url('/cars/${car}')`,
                }}
              ></Box>
              <Typography variant="h6" fontSize={14} fontWeight={600}>
                Ferrari GT
              </Typography>
            </Stack>
          ))}
        </Box>
      )}
    </Stack>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/pwa" element={<PwaLayout />}>
            <Route path="home" element={<WelcomePage />} />
            <Route path="settings" element={<WelcomePage />} />
            <Route path="parking" element={<ParkingPage />} />
            <Route path="game/:tab" element={<GamePage />} />
            <Route path="levels/:id" element={<ParingLevelPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
