import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Chip } from "@mui/material";
import { fetchQuestionsSuccess } from "../../Redux/question/questionsActions";
import { backendServerURL } from "../../utils/config";

function TopicChip({ title, selectedTopics, setSelectedTopics }) {
  const handleClick = (top) => {
    setSelectedTopics((prev) => {
      if (prev.indexOf(top) !== -1) return prev;
      return [...prev, top];
    });
  };

  return (
    <Chip
      sx={{ color: "white" }}
      variant="outlined"
      size="medium"
      color={"primary"}
      label={title}
      onClick={() => handleClick(title)}
    />
  );
}

export default TopicChip;
