import { Section } from "./Section";
import { CheckboxSectionRow } from "./CheckboxSectionRow";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export function WeeklySchedule() {
  const week = generateWeekArray(new Date());
  const [checked, setChecked] = useState([true, true, true, true, true]);
  return (
    <Section label="Heti beosztásom">
      {week.map((wd, index) => (
        <CheckboxSectionRow
          key={wd.toISOString()}
          checked={checked[index]}
          onClick={() =>
            setChecked((prev) => {
              const next = JSON.parse(JSON.stringify(prev));
              next[index] = !next[index];
              return next;
            })
          }
          title={wd.toLocaleString(undefined, { weekday: "long" })}
          subtitle={wd.toLocaleDateString()}
          icon={
            <Stack direction="column" alignItems="center">
              <Typography fontSize={18} color="white" fontWeight="bold">
                {wd.toLocaleString(undefined, { day: "2-digit" })}
              </Typography>
              <Typography fontSize={12} color="white">
                {wd.toLocaleString(undefined, { month: "short" })}
              </Typography>
            </Stack>
          }
        />
      ))}
    </Section>
  );
}
function generateWeekArray(date: Date): Date[] {
  const week: Date[] = [];
  date.setDate(date.getDate() - date.getDay() + 1);
  for (let i = 0; i < 5; i++) {
    week.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return week;
}
