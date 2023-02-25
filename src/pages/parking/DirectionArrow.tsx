import { Box, useTheme } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import React from "react";

export function DirectionArrow() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        top: 110,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
        <ExpandMoreRoundedIcon
          fontSize="large"
          sx={{
            color: "primary.main",
            transform: "rotate(90deg)",
            position: "absolute",
            left: 0,
            top: -5,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: 20,
            width: 4,
            top: 18,
            left: 28,
            transform: "rotate(-90deg)",
            animation: "border-dance 4s infinite linear",
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(90deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(0deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(0deg, ${theme.palette.primary.main} 50%, transparent 50%)`,
            backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
            backgroundSize: "15px 4px, 15px 4px, 4px 15px, 4px 15px",
            backgroundPosition: "0px 0px, 200px 100px, 0px 100px, 200px 0px",
            mt: -2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            height: "calc(100% - 13px)",
            width: 4,
            bottom: 0,
            animation: "border-dance 4s infinite linear",
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(90deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(0deg, ${theme.palette.primary.main} 50%, transparent 50%), linear-gradient(0deg, ${theme.palette.primary.main} 50%, transparent 50%)`,
            backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
            backgroundSize: "15px 4px, 15px 4px, 4px 15px, 4px 15px",
            backgroundPosition: "0px 0px, 200px 100px, 0px 100px, 200px 0px",
            mt: -2,
          }}
        />
      </Box>
    </Box>
  );
}
