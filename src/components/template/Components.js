import React from "react";
import { Typography } from "@mui/material";
import tw from "twin.macro";

export const HeadSubTitle = tw.h4`font-sans font-medium text-2xl text-[#7D3131]`;

export function Title({ type, underline, variant }) {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "Roboto, sans-serif",
        textDecoration: { underline },
        textDecorationThickness: "1px",
        textUnderlineOffset: "8px",
      }}
      component={type}
      fontWeight="light"
    >
      LEARN-TUBE
    </Typography>
  );
}
