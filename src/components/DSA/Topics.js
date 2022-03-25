import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import tw from "twin.macro";
import { deepPurple } from "@mui/material/colors";
import { styled, theme } from "@mui/system";
import { HeadSubTitle } from "../template/Components";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const Header = tw(HeadSubTitle)`text-black text-3xl text-center my-1`;

function Topics() {
  const topic = [
    { id: 1, title: "Arrays" },
    { id: 2, title: "BitManipulation" },
    { id: 3, title: "BFS" },
    { id: 4, title: "DFS" },
    { id: 5, title: "UnionFind" },
    { id: 5, title: "TopologicalSort" },
    { id: 6, title: "Backtracking" },
    { id: 7, title: "BinarySearch" },
    { id: 8, title: "Heap" },
    { id: 9, title: "BucketSort" },
    { id: 10, title: "DynamicProgramming" },
    { id: 11, title: "Trie" },
    { id: 12, title: "Design" },
    { id: 13, title: "Greedy" },
    { id: 14, title: "Fast&SlowPointers" },
    { id: 15, title: "Intervals" },
    { id: 16, title: "In-placereversalofalinkedlist" },
    { id: 17, title: "SlidingWindow" },
    { id: 18, title: "Sorting" },
    { id: 19, title: "TwoPointers" },
  ];
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
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
                    onClick={handleClick}
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
