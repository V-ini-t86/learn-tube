import React from "react";
import { Spinner } from "react-spinner-animated";
import { Box } from "@mui/material";
import Infinity from "../../images/Infinity1.gif";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Loader() {
  return (
    <Box sx={style}>
      <img src={Infinity} alt="infy-spinner" />
    </Box>
  );
}
