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
          selector: "#profile-selector",
          title: "Profil választás",
          customDescriptionRenderer(descriotion: string, logic) {
            return (
              <>
                <p>
                  Az alkalmazás szimulálásához több user profil is elérhető,
                  Wendy-nek például nincs fix parkoló helye, míg a többieknek
                  van.
                </p>
                <p>
                  Telefonos nézetben a felhasználó nevére vagy profilképére
                  kattintva is előhozható ugyanez a menü.
                </p>
              </>
            );
          },
          description: "",
        },
        {
          selector: "#my-week",
          title: "Heti beosztásom",
          description:
            "Ha a felhasználó rendelkezik parkolóhellyel, akkor itt a következő heti beosztását állíthatja be.",
        },
        {
          selector: "#my-cars",
          title: "Saját autóim",
          description:
            "Itt láthatod az általad regisztrált autóidat. Ezekkel az autókkal hajthatsz be a parkolóházba.",
        },
        {
          selector: "#new-car",
          title: "Új autó hozzáadása",
          description: "Itt vihetsz fel új autót a rendszerbe.",
        },
        {
          selector: "#parking-map",
          title: "Térkép",
          description:
            "Ezen a fülön a parkolóház térképét láthatod. A térkép szintekre van osztva, minden szinten látható a parkolóhelyek aktuális állapota.",
        },
        {
          selector: "#gamification",
          title: "Játék",
          description:
            "A játék fülön az alkalmazásban gyűjtött tokeneket beválthatod játékautókra, amiket a többi felhasználó is lát.",
        },
        {
          selector: "#insights",
          title: "Statisztikák",
          description:
            "A statisztikák fülön a parkolóház főbb adatait és az alkalmazáshasználati kimutatásokat láthasz.",
          closeLabel: "Rendben, értem.",
        },
      ]}
    />
  );
}
