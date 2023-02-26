import { Walktour } from "walktour";
import { Typography } from "@mui/material";
import { WalktourFooter } from "./WalktourFooter";
import React from "react";

export function Tutorial() {
  return (
    <Walktour
      disableClose
      allowForeignTarget={false}
      customTitleRenderer={(title) => (
        <Typography variant="h2" fontWeight="bold" color="black">
          {title}
        </Typography>
      )}
      customFooterRenderer={(tourLogic) => (
        <WalktourFooter
          tourLogic={tourLogic}
          onSkip={() => tourLogic?.close()}
          onNext={() => tourLogic?.next()}
        />
      )}
      steps={[
        {
          selector: "#app",
          title: "Üdv!",
          description:
            "Üdvözlünk a ParkHouse-ban! Engedd meg, hogy néhány lépésben bemutassuk az alkalmazás használatát.",
        },
        {
          selector: "#app",
          title: "Mobilapp",
          description:
            "A webes alkalmazás mellett telefonra telepíthető progresszív webapp-ot (PWA) is készítettünk. Ennek eléréséhez nyisd meg ezt az oldalt a mobilodon, vagy olvasd be a lenti QR kódot.",
          customDescriptionRenderer(descriotion: string, logic) {
            return (
              <>
                <p>{descriotion}</p>
                <img src="qr.png" alt="" />
              </>
            );
          },
        },
        {
          selector: "#video-toggle",
          title: "Toggle video visibility",
          description: "If you don't want to see the video, you can hide it",
        },
        {
          selector: "#playback-control",
          title: "Playback control",
          description: "You can control the simulation here",
        },
        {
          selector: "#speed-selector",
          title: "Select the simulation speed",
          description:
            "You can change the simulation speed with this dropdown. 1x means 1 second in the simulation is 1 second in real time",
        },
        {
          selector: "#play-button",
          title: "Start the simulation",
          description: "You can start the simulation with this button",
        },
        {
          selector: "#dashboard",
          title: "Car dashboard",
          description:
            "Here you can see the car's speed and the left and right blind spot sensors. These sensors will blink, when something is in the blind spot.",
        },
        {
          selector: "#object-list",
          title: "Select an object",
          description:
            "You can select an object from the list to see its details",
          closeLabel: "Okay, got it",
        },
      ]}
    />
  );
}
