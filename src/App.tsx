import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./theme";
import { PwaLayout } from "./layout/PwaLayout";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";

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

function Section({
  label,
  children,
}: {
  label: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Stack gap={2} direction="column" width="100%">
      <Typography variant="h2">{label}</Typography>
      <Stack direction="row" width="100%">
        {children}
      </Stack>
    </Stack>
  );
}

function SectionRow({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}) {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{ borderRadius: 4, width: "100%", border: "1px solid #595959", p: 1 }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          flexShrink: 0,
          flexGrow: 0,
          width: 64,
          height: 64,
          borderRadius: 3,
          backgroundColor: "primary.main",
        }}
      >
        {icon}
      </Stack>
      <Stack direction="column" width="100%">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{subtitle}</Typography>
      </Stack>
      <IconButton>
        <ArrowForwardIosOutlined color="secondary" />
      </IconButton>
    </Stack>
  );
}

function WelcomePage() {
  return (
    <Stack direction="column" gap={6}>
      <Typography variant="h1" color="text.primary">
        👋 Üdv!
      </Typography>
      <Section label="Következő foglalásaim">
        <SectionRow
          title="A123"
          subtitle="P1 - 1. emelet"
          icon={
            <Stack direction="column" alignItems="center">
              <Typography fontSize={18} color="white" fontWeight="bold">
                24
              </Typography>
              <Typography fontSize={12} color="white">
                Febr
              </Typography>
            </Stack>
          }
        />
      </Section>
      <Button variant="contained" startIcon={<EventNoteIcon />}>
        Új foglalás
      </Button>

      <Section label="Autóim">
        <SectionRow
          title="NYK-873"
          subtitle="Alapértelmezett"
          icon={<DirectionsCarIcon sx={{ color: "white" }} fontSize="large" />}
        />
      </Section>
    </Stack>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/pwa" element={<PwaLayout />}>
            <Route path="home" element={<WelcomePage />} />
            <Route path="settings" element={<WelcomePage />} />
            <Route path="parking" element={<WelcomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
