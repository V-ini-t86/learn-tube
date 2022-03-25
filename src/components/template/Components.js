import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
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

const Card = styled("div")(({ theme }) => ({
  margin: "1rem 0rem 0rem 0rem",
  padding: "3rem",
  width: "auto",
  background: "rgb(27, 23, 23,0.5)",
  border: "5.26316px solid #A8A3A3",
  borderRadius: "35.0877px 0px",
}));

const CardTitle = styled("h4")(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 300,
  lineHeight: "33px",
  fontSize: "28px",
}));

const Dot = styled("div")(({ theme }) => ({
  width: "16px",
  height: "15px",
  borderRadius: "50%",
  background: "#16896D",
}));

const Level = styled("h4")(({ theme }) => ({
  color: "white",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 300,
  width: "16px",
  height: "15px",
}));

const LearnBtn = styled("button")(({ theme }) => ({
  fontFamily: "Raleway, sans-serif",
  color: "black",
  fontWeight: 600,
  lineHeight: "25px",
  fontSize: "21px",
  borderRadius: "8px",
  borderColor: "black",
  background: "#9BA5BF",
  padding: "0px 15px",
  transition: "0.4s",
  cursor: "pointer",
  "&:hover": {
    background: "white",
  },
}));

const CardFooter = styled(Box)(({ theme }) => ({
  width: "80%",
  color: "white",
  background: "rgb(27, 23, 23,0.5)",
  border: "5.26316px solid #A8A3A3",
  borderRadius: "0px 0px 35.0877px 0px",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
}));
const FooterTitle = styled("h5")(({ theme }) => ({
  fontFamily: "Raleway, sans-serif",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "17.5439px",
  lineHeight: "21px",
}));

export { Card, LearnBtn, Level, Dot, CardTitle, CardFooter, FooterTitle };
