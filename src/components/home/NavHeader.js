import React from "react";
import { Stack, Typography } from "@mui/material";
import { styled, theme } from "@mui/system";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import Logo from "../../images/LTlogo.svg";

const LogoBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "0px",
  margin: "5px",
  "&:hover": {
    backgroundColor: "white",
  },
}));
const LogoImg = styled("img")(({ theme }) => ({
  width: 101,
  height: 91,
  color: "white",
  borderRadius: "1rem",
}));

function NavHeader() {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { md: "flex" } }}
      >
        <Link to="/">
          <LogoBtn>
            <LogoImg className="logo" src={Logo} alt="logo" />
          </LogoBtn>
        </Link>
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto, sans-serif",
          textDecoration: "underline",
          textDecorationThickness: "1px",
          textUnderlineOffset: "8px",
          color: "white",
          display: { xs: "none", md: "flex" },
        }}
        component="h4"
        fontWeight="light"
      >
        LEARN-TUBE
      </Typography>
    </Stack>
  );
}

export default NavHeader;
