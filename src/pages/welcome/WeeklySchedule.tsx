import { Section } from "./Section";
import { CheckboxSectionRow } from "./CheckboxSectionRow";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  MyResignationsDocument,
  useMakeResignationMutation,
  useMyResignationsQuery,
  useRemoveResignationMutation,
} from "../../generated/graphql";

export function WeeklySchedule() {
  const week = generateWeekArray(new Date());
  const { data: resignations } = useMyResignationsQuery();
  const [makeResignation] = useMakeResignationMutation({
    refetchQueries: [MyResignationsDocument],
  });
  const [removeResignation] = useRemoveResignationMutation({
    refetchQueries: [MyResignationsDocument],
  });
  const checked = week.map(
    (wd) =>
      !resignations?.myResignation.some(
        (res) => new Date(res.date).toDateString() === wd.toDateString()
      ) ?? true
  );

  function toggleResignation(date: Date, index: number) {
    if (checked[index]) {
      makeResignation({
        variables: {
          date: date.toISOString().slice(0, 10) + "T00:00:00Z",
        },
      });
    } else {
      removeResignation({
        variables: {
          date: date.toISOString().slice(0, 10) + "T00:00:00Z",
        },
      });
    }
  }

  return (
    <Section label="Heti beosztásom">
      {week.map((wd, index) => (
        <CheckboxSectionRow
          key={wd.toISOString()}
          checked={checked[index]}
          onClick={() => toggleResignation(wd, index)}
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
