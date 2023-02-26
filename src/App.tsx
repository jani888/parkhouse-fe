import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Avatar,
  Box,
  ButtonBase,
  Container,
  CssBaseline,
  Grid,
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
import {
  ParkingLevel,
  ParkingLevelPage,
} from "./pages/parking/ParkingLevelPage";
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
import { ReactComponent as Logo } from "./Logo.svg";
import { useGetMeQuery, useParkingLevelsQuery } from "./generated/graphql";
import { ProfileSelector } from "./pages/welcome/Profile";
import { WeeklySchedule } from "./pages/welcome/WeeklySchedule";
import { UpcomingReservations } from "./pages/welcome/UpcomingReservations";
import InsightsIcon from "@mui/icons-material/Insights";
import { useNavigate } from "react-router";

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

function ActiveIndicator() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 2,
        width: 20,
        height: 4,
        left: "50%",
        transform: "translateX(-50%)",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        bgcolor: "primary.main",
      }}
    ></Box>
  );
}

function DesktopMenu() {
  const [open, setOpen] = useState(false);
  const { data } = useGetMeQuery();
  return (
    <Stack
      px={2}
      direction="row"
      justifyContent="space-between"
      height={64}
      alignItems="center"
      sx={{ backgroundColor: "#171717" }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Logo style={{ height: 48, width: 48 }} />
        <Typography variant="h3" fontWeight={900}>
          ParkHouse
        </Typography>
      </Stack>
      <Stack direction="row">
        <NavLink to="/home" style={{ width: 96, position: "relative" }}>
          {({ isActive }) => (
            <>
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
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink to="/parking" style={{ width: 96, position: "relative" }}>
          {({ isActive }) => (
            <>
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
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink to="/game/garage" style={{ width: 96, position: "relative" }}>
          {({ isActive }) => (
            <>
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
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
        <NavLink to="/insights" style={{ width: 96, position: "relative" }}>
          {({ isActive }) => (
            <>
              <MenuItem
                icon={
                  <InsightsIcon
                    fontSize="large"
                    color={isActive ? "primary" : "secondary"}
                  />
                }
              >
                Insights
              </MenuItem>
              {isActive && <ActiveIndicator />}
            </>
          )}
        </NavLink>
      </Stack>
      <Stack
        component={ButtonBase}
        onClick={() => setOpen(true)}
        py={1}
        pl={1}
        pr={2}
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ backgroundColor: "#272727", borderRadius: 100 }}
      >
        <Avatar sx={{ width: 34, height: 34 }} />
        <Typography variant="h4">{data?.myUser.name}</Typography>
      </Stack>
      <ProfileSelector open={open} onClose={() => setOpen(false)} />
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
  const { data } = useGetMeQuery();

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Stack direction="row" gap={2} p={4}>
        {data?.myUser.hasFixedParkingSpace ? (
          <WeeklySchedule />
        ) : (
          <UpcomingReservations />
        )}
        <Box width={300} sx={{ flexShrink: 0 }}>
          <CarsPage />
        </Box>
      </Stack>
    </Container>
  );
}

function DesktopParkingPage() {
  const { data } = useParkingLevelsQuery();

  const [level, setLevel] = useState("");
  useEffect(() => {
    if (!data) return;
    setLevel(data.levels[0].id);
  }, [data]);
  return (
    <Stack component={Container} maxWidth="sm" height="100%" p={4} gap={4}>
      <Typography variant="h1">Parkolóhelyek</Typography>
      <Stack direction="row" gap={2} height="100%">
        <Tabs
          sx={{
            flexShrink: 0,
            "& .MuiTabs-flexContainer": {
              borderBottom: "none",
            },
            "& button": {
              borderRadius: `8px`,
              color: (theme) => theme.palette.grey[600],
              minHeight: "auto",
              minWidth: "100%",
              py: 1.5,
              px: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              textAlign: "left",
              justifyContent: "flex-start",
            },
            "& button.Mui-selected": {
              color: (theme) => theme.palette.primary.main,
              background: "#171717",
            },
            "& button > svg": {
              marginBottom: "0px !important",
              marginRight: 1.25,
              marginTop: 1.25,
              height: 20,
              width: 20,
            },
            "& button > div > span": {
              display: "block",
            },
            "& > div > span": {
              display: "none",
            },
          }}
          orientation="vertical"
          variant="scrollable"
          value={level}
          onChange={(_, value) => setLevel(value)}
          aria-label="Vertical tabs example"
        >
          {data?.levels.map((level) => (
            <Tab
              sx={{
                color: "white",
                width: 200,
                py: 4,
                boxSizing: "border-box",
              }}
              value={level.id}
              key={level.id}
              label={
                <Grid container direction="column">
                  <Typography
                    component="div"
                    variant="caption"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {level.label}
                  </Typography>
                </Grid>
              }
            />
          ))}
        </Tabs>

        <Box
          sx={{
            p: 4,
            borderRadius: 4,
            background: "#171717",
            width: "100%",
            height: "100%",
          }}
        >
          <ParkingLevel hideBackButton id={level} />
        </Box>
      </Stack>
    </Stack>
  );
}

function DesktopGamePage() {
  return (
    <Container maxWidth="md" sx={{ p: 4 }}>
      <GamePage basePath="" />
    </Container>
  );
}

function NavigateToMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (window.innerWidth < 500) {
      navigate("/pwa/home");
    } else if (location.pathname.startsWith("/pwa")) {
      navigate("/");
    }
    const listener = () => {
      if (window.innerWidth < 500) {
        navigate("/pwa/home");
      } else if (location.pathname.startsWith("/pwa")) {
        navigate("/");
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [navigate, location]);
  return null;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  return null;
}

function InsightsPage() {
  return (
    <Stack p={4}>
      <Typography variant="h1">Statisztika</Typography>
    </Stack>
  );
}

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
