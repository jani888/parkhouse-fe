import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section } from "../welcome/Section";
import { SectionRow } from "../welcome/SectionRow";
import { useNavigate } from "react-router";
import { useParkingLevelsQuery } from "../../generated/graphql";

export function ParkingPage() {
  const navigate = useNavigate();
  const { data } = useParkingLevelsQuery();

  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h1" mb={4}>
        🏢 Parkoló szintek
      </Typography>

      {data?.levels.map((level, index) => (
        <SectionRow
          onClick={() => navigate("/pwa/levels/" + level.id)}
          key={level.id}
          title={level.label}
          subtitle="16 férőhely"
          icon={
            <Typography fontWeight={900} fontSize={32}>
              {index + 1}
            </Typography>
          }
        />
      ))}
    </Stack>
  );
}
