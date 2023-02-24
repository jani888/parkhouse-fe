import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section } from "../welcome/Section";
import { SectionRow } from "../welcome/SectionRow";
import { useNavigate } from "react-router";

export function ParkingPage() {
  const levels = [1, 2, 3, 4];
  const navigate = useNavigate();

  return (
    <Stack direction="column">
      <Typography variant="h1">Parkoló szintek</Typography>

      <Section label=" ">
        {levels.map((level) => (
          <SectionRow
            onClick={() => navigate("/pwa/levels/" + level)}
            key={level}
            title={level + ". emelet"}
            subtitle="16 férőhely"
            icon={
              <Typography fontWeight={900} fontSize={32}>
                {level}
              </Typography>
            }
          />
        ))}
      </Section>
    </Stack>
  );
}
