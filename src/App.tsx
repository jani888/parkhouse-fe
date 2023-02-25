import React from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { PwaLayout } from "./layout/PwaLayout";
import { WelcomePage } from "./pages/welcome/WelcomePage";
import { ParkingPage } from "./pages/parking/ParkingPage";
import { ParkingLevelPage } from "./pages/parking/ParkingLevelPage";
import { GamePage } from "./pages/game/GamePage";
import { ReservationPage } from "./pages/reservation/ReservationPage";
import { CarsPage } from "./pages/cars/CarsPage";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { JWTContextProvider } from "./JWTContextProvider";
import { MenuItem, MobileMenu } from "./components/MobileMenu";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import VideogameAssetTwoToneIcon from "@mui/icons-material/VideogameAssetTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";

const httpLink = createHttpLink({
  uri: "https://parkhouse.chazebot.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function DesktopMenu() {
  return (
    <Stack direction="row" height={64} sx={{ backgroundColor: "#171717" }}>
      <NavLink to="/pwa/home" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <HomeTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Home
          </MenuItem>
        )}
      </NavLink>
      <NavLink to="/pwa/parking" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <MapTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Parking
          </MenuItem>
        )}
      </NavLink>
      <NavLink to="/pwa/game/garage" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <VideogameAssetTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Cars
          </MenuItem>
        )}
      </NavLink>
      <NavLink to="/pwa/cars" style={{ width: "100%" }}>
        {({ isActive }) => (
          <MenuItem
            icon={
              <DirectionsCarFilledTwoToneIcon
                fontSize="large"
                color={isActive ? "primary" : "secondary"}
              />
            }
          >
            Cars
          </MenuItem>
        )}
      </NavLink>
    </Stack>
  );
}

function HomeLayout() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <DesktopMenu />
      <Outlet />
    </Stack>
  );
}

function DashboardPage() {
  return <></>;
}

function App() {
  return (
    <JWTContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<DashboardPage />} />
              </Route>
              <Route path="/pwa" element={<PwaLayout />}>
                <Route path="home" element={<WelcomePage />} />
                <Route path="settings" element={<WelcomePage />} />
                <Route path="parking" element={<ParkingPage />} />
                <Route path="game/:tab" element={<GamePage />} />
                <Route path="levels/:id" element={<ParkingLevelPage />} />
                <Route path="reservations/:id" element={<ReservationPage />} />
                <Route path="cars" element={<CarsPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    </JWTContextProvider>
  );
}

export default App;
