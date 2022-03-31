import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Chip } from "@mui/material";
import { fetchQuestionsSuccess } from "../../Redux/question/questionsActions";
import { backendServerURL } from "../../utils/config";

function TopicChip({ title }) {
  const [currTopic, setCurrTopic] = useState(null);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setCurrTopic(null);
    const removeByTopics = async () => {
      try {
        const { data } = await axios.get(`${backendServerURL}/dsa`);
        dispatch(fetchQuestionsSuccess(data.result));
      } catch (error) {
        console.log(error.message);
      }
    };
    removeByTopics();
  };

  const handleClick = (top) => {
    let topic = "";
    setCurrTopic(top);

    const filterByTopics = async () => {
      topic += top;
      try {
        const { data } = await axios.get(
          `${backendServerURL}/dsa?topic=${topic}`
        );
        dispatch(fetchQuestionsSuccess(data.result));
      } catch (error) {
        console.log(error.message);
      }
    };

    filterByTopics();
  };

  if (currTopic) {
    return (
      <Chip
        sx={{ color: "white" }}
        variant="outlined"
        size="medium"
        color={"primary"}
        label={title}
        onDelete={() => handleDelete()}
      />
    );
  }

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
