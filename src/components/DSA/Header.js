import React from "react";
import { Box, Stack } from "@mui/material";
import { Title, HeadSubTitle } from "../template/Components";

import MansIcon from "../../images/man-logo.svg";
import EducationIcon from "../../images/education-logo.svg";

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        padding: "10px 0px",
        width: "450px",
        background: "#ffffff",
        borderRadius: "1rem",
        border: "2px solid black",
        gap: "10px",
      }}
    >
      <img src={MansIcon} alt="mans-icon" />
      <Stack alignItems="center" gap="15px">
        <Title type="h4" variant="h5" />
        <HeadSubTitle>DSA SOLUTION VIDEOS</HeadSubTitle>
      </Stack>
      <img src={EducationIcon} alt="mans-icon" />
    </Box>
  );
}

export default Header;
