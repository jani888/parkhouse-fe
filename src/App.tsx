import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { PwaLayout } from "./layout/PwaLayout";
import { WelcomePage } from "./pages/welcome/WelcomePage";
import { Global } from "@emotion/react";

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
            <Route path="parking" element={<WelcomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
