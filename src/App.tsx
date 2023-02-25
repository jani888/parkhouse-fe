import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./theme";
import { PwaLayout } from "./layout/PwaLayout";
import { WelcomePage } from "./pages/welcome/WelcomePage";
import { ParkingPage } from "./pages/parking/ParkingPage";
import { ParkingLevelPage } from "./pages/parking/ParkingLevelPage";
import { GamePage } from "./pages/game/GamePage";
import { BackButton } from "./components/BackButton";
import { BlueSquare } from "./components/BlueSquare";
import { DateLabels } from "./components/DateLabels";

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

function ReservationPage() {
  const date = new Date();
  return (
    <Stack gap={2} height="100%">
      <Typography variant="h1">
        <BackButton to="/pwa/home" />
        Foglalás
      </Typography>

      <Stack direction="row" justifyContent="center">
        <BlueSquare size="large">
          <DateLabels size="large" value={date} />
        </BlueSquare>
      </Stack>

      <List>
        <ListItem>
          <ListItemText primary="Emelet" secondary="1. emelet" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Parkolóhely" secondary="A123" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Autó" secondary="NYK-873" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dátum" secondary={date.toLocaleDateString()} />
        </ListItem>
      </List>

      <Button variant="contained" color="error" sx={{ mt: "auto" }}>
        Foglalás lemondása
      </Button>
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
            <Route path="levels/:id" element={<ParkingLevelPage />} />
            <Route path="reservations/:id" element={<ReservationPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
