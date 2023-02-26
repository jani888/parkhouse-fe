import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
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
import { HomeLayout } from "./layout/HomeLayout";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { DesktopParkingPage } from "./pages/parking/DesktopParkingPage";
import { DesktopGamePage } from "./pages/game/DesktopGamePage";
import { NavigateToMobile } from "./components/NavigateToMobile";
import { ScrollToTop } from "./components/ScrollToTop";
import { InsightsPage } from "./pages/insights/InsightsPage";

const httpLink = createHttpLink({
  uri: "https://parkhouse.chazebot.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    localStorage.getItem("token") ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWRtaW4iLCJuYW1lIjoiQWRtaW4ifSwiaWF0IjoxNjc3MzQwMTkwLCJleHAiOjE2Nzg2MzYxOTB9.clY9jGEGtEdwYm4Mck9vERe0nuM9vlJP51M7_1Jk68o";
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

function App() {
  return (
    <JWTContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <NavigateToMobile />
          <ScrollToTop />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/home" element={<DashboardPage />} />
                <Route path="/parking" element={<DesktopParkingPage />} />
                <Route path="/game/:tab" element={<DesktopGamePage />} />
                <Route path="/insights" element={<InsightsPage />} />
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
