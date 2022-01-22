import { Divider, Grid } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navbar from "../home/Navbar";
import QuestionColumn from "../pquestion/QuestionColumn";
import SolutionColumn from "../pquestion/SolutionColumn";

function Question() {
  const { quename } = useParams();
  return (
    <>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <QuestionColumn />
        </Grid>
        <Grid item lg={6}>
          {/* <Divider orientation="vertical" flexItem /> */}
          <h1>Solutions</h1>
          <SolutionColumn />
        </Grid>
      </Grid>
    </>
  );
}

export default Question;
