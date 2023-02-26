import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import PieChartTwoToneIcon from "@mui/icons-material/PieChartTwoTone";
import { BlueSquare } from "../../components/BlueSquare";
import NoCrashTwoToneIcon from "@mui/icons-material/NoCrashTwoTone";
import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { Leaderboard } from "../game/GamePage";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function StatCard({
  label,
  time,
  value,
  icon,
  diff,
}: {
  label: string;
  time: string;
  value: string;
  diff: string;
  icon: JSX.Element;
}) {
  return (
    <Card sx={{ width: "25%", background: "#1f1f1f", borderRadius: 4 }}>
      <CardContent sx={{ p: 2, pb: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          textAlign="center"
        >
          <Typography variant="h4" mb={2} color="grey.500">
            {label}
          </Typography>

          <Typography variant="body1" fontSize={12} color="grey.500">
            {time}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack gap={1}>
            <Typography variant="h1" fontSize={36}>
              {value}
            </Typography>
            <Stack direction="row" gap={1} mt="auto">
              <Typography fontSize={12} color="success.main">
                {diff}
              </Typography>
              <Typography fontSize={12}>az előző időszakhoz képest</Typography>
            </Stack>
          </Stack>
          <BlueSquare>{icon}</BlueSquare>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function InsightsPage() {
  return (
    <Stack gap={4} p={4}>
      <Typography variant="h1">Statisztika</Typography>

      <Stack gap={2} direction="row">
        <StatCard
          diff="+3"
          label="Aktív parkolás"
          value="500 autó"
          time="ma"
          icon={<NoCrashTwoToneIcon fontSize="large" />}
        />
        <StatCard
          diff="-2 %"
          label="Havi kihasználtság"
          value="97%"
          time="2023. február"
          icon={<PieChartTwoToneIcon fontSize="large" />}
        />
        <StatCard
          diff="+1 fő"
          label="Várólista hossza"
          value="3 fő"
          time="ma"
          icon={<HourglassFullTwoToneIcon fontSize="large" />}
        />
        <StatCard
          diff="+75 fő"
          label="Alkalmazás havi felhasználói"
          value="673 fő"
          time="01. 27. - 02. 27."
          icon={<AccountCircleTwoToneIcon fontSize="large" />}
        />
      </Stack>

      <Stack direction="row" height="100%" minHeight={0} gap={2}>
        <Card sx={{ width: "25%", background: "#1f1f1f", borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h2">Heti toplista</Typography>
          </CardContent>
          <Leaderboard />
        </Card>

        <Card
          sx={{
            width: "75%",
            height: 500,
            background: "#1f1f1f",
            borderRadius: 4,
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h2">Heti Kihasználtság</Typography>
            <Box sx={{ width: "100%", height: "100%", p: 2 }}>
              <Bar
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: false,
                    },
                  },
                }}
                data={{
                  datasets: [
                    {
                      backgroundColor: "#5A87DF",
                      borderRadius: 12,
                      label: "Kihasználtság (%)",
                      data: [64, 97, 92, 84, 23],
                    },
                  ],
                  labels: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"],
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
