import React from "react";
import { Box } from "@mui/material";
import { styled, theme } from "@mui/system";

import LikedLogo from "../../images/liked.svg";
import WatchLaterLogo from "../../images/watch-later.svg";
import HistoryLogo from "../../images/history.svg";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#FF8484",
  borderRadius: "1.5rem",
  fontFamily: "'Wellfleet', cursive",
  fontSize: "large",
  border: "none",
  display: "flex",
  alignItems: "center",
  width: "auto",
  padding: "5px 20px",
}));

const Container = styled(Box)(({ theme }) => ({
  padding: "15px 30px",
  background: "#232E49",
  border: "1.39015px solid #FFFFFF",
  boxSizing: "border-box",
  borderRadius: "20.8523px",
  minWidth: "734px",
  minHeight: "61.86px",
  marginBottom: "15vh",
}));

const Icon = styled("img")(({ theme }) => ({
  marginLeft: "5px",
  width: "25px",
  height: "25px",
}));

function ButtonInteraction() {
  return (
    <Container display="flex" justifyContent="space-between" width="500px">
      <Button>
        <span>liked</span>
        <Icon src={LikedLogo} alt="watch-later-icon" />
      </Button>
      <Button style={{ background: "#5ab8c5" }}>
        <span>watch later</span>
        <Icon src={WatchLaterLogo} alt="watch-later-icon" />
      </Button>
      <Button style={{ background: "#e08959" }}>
        <span>history</span>
        <Icon src={HistoryLogo} alt="history-icon" />
      </Button>
    </Container>
  );
}

export default ButtonInteraction;
