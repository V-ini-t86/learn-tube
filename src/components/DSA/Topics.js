import React, { useState, useEffect } from "react";
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
import TopicChip from "./Topic";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const Header = tw(HeadSubTitle)`text-black text-3xl text-center my-1`;

function Topics() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const filterByTopics = async () => {
      try {
        const { data } = await axios.get(
          `${backendServerURL}/dsa?topic=${selectedTopics.join(",")}`
        );
        dispatch(fetchQuestionsSuccess(data.result));
      } catch (error) {
        console.log(error.message);
      }
    };

    filterByTopics();
  }, [selectedTopics]);

  const handleDelete = (top) => {
    setSelectedTopics((prev) => prev.filter((val, i) => i !== top));
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
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            sx={{
              background: "#322020",
            }}
          >
            {selectedTopics &&
              selectedTopics.map((top, i) => {
                return (
                  <Chip
                    key={i}
                    sx={{ color: "white", margin: "0.4rem" }}
                    variant="outlined"
                    size="medium"
                    color={"primary"}
                    label={top}
                    onDelete={() => handleDelete(i)}
                  />
                );
              })}
          </Box>
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
                  <TopicChip
                    key={val.id}
                    selectedTopics={selectedTopics}
                    setSelectedTopics={setSelectedTopics}
                    title={val.title}
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
