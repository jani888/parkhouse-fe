import { WalktourLogic } from "walktour";
import { Button, Stack } from "@mui/material";
import React from "react";

interface WalktourFooterProps {
  tourLogic?: WalktourLogic;
  onSkip: () => void;
  onNext: () => void;
}

export function WalktourFooter({
  tourLogic,
  onSkip,
  onNext,
}: WalktourFooterProps) {
  return (
    <Stack justifyContent="space-between" direction="row" mt={2}>
      {tourLogic?.stepContent.selector === "#insights" ? (
        <Button variant="contained" onClick={onSkip}>
          Befejezés
        </Button>
      ) : (
        <>
          <Button variant="text" onClick={onSkip}>
            Bemutató kihagyása
          </Button>
          <Button variant="contained" onClick={onNext}>
            Következő
          </Button>
        </>
      )}
    </Stack>
  );
}
