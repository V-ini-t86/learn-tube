import React, { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import tw from "twin.macro";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import { styled, theme } from "@mui/system";
import { HeadSubTitle } from "../template/Components";
import { topic } from "./companies";
import { backendServerURL } from "../../utils/config";
import { fetchQuestionsSuccess } from "../../Redux/question/questionsActions";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const Header = tw(HeadSubTitle)`text-black text-3xl text-center my-1`;

function Topics() {
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
    setCurrTopic(top);
    const filterByTopics = async () => {
      try {
        const { data } = await axios.get(
          `${backendServerURL}/dsa?topic=${top}`
        );
        dispatch(fetchQuestionsSuccess(data.result));
      } catch (error) {
        console.log(error.message);
      }
    };

    filterByTopics();
  };
  return (
    <Container>
      <Box
        sx={{
          background: "#C4C4C4",
          padding: "0vh 3vh 3vh 3vh",
          width: "70%",
          borderRadius: "30px 30px 20px 20px",
        }}
      >
        <Header>Topics</Header>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            background: " #051756",
            color: "white",
            borderRadius: "40px 40px 10px 10px",
            padding: "40px 20px 20px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2vh",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {topic &&
              topic.map((val) => {
                return (
                  <Chip
                    sx={{ color: "white" }}
                    variant="outlined"
                    key={val.id}
                    size="medium"
                    color={"primary"}
                    label={val.title}
                    onClick={() => handleClick(val.title)}
                  />
                );
              })}
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Topics;
