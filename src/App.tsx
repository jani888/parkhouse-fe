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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
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
  );
}

export default App;
