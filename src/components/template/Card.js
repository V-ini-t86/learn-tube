import React from "react";
import _ from "lodash";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardFooter,
  CardTitle as Title,
  LearnBtn as Button,
  Level,
  Dot,
  FooterTitle,
} from "./Components";
import { companyIcons } from "../DSA/companies";

function QCard({ que }) {
  const navigate = useNavigate();
  const companies = que.companies.split(",");

  function findIcons(title) {
    return new Promise((res, rej) => {
      let ci = companyIcons.filter((icon) => {
        return icon.title === title;
      });
      if (ci) {
        res(ci);
      }
    });
  }

  const c = companies.map((val) => {
    let CI = findIcons(val).then((res) => res);
    return {
      icon: CI.icon,
      title: CI.title,
    };
  });

  return (
    <>
      <Card>
        <Box
          display="flex"
          alignItems="center"
          flexBasis="auto"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Title>{que.name}</Title>
            <span style={{ display: "flex", gap: "10px", marginLeft: "1rem" }}>
              <Dot />
              <Level>{que.difficulty}</Level>
            </span>
          </Box>
          <Button onClick={() => navigate(`/dsa/${_.kebabCase(que.id)}`)}>
            Learn
          </Button>
        </Box>
      </Card>
      <CardFooter>
        <FooterTitle>{que.pattern[0]}</FooterTitle>
        <FooterTitle>
          {`${companies[0] ? companies[0] : ""}, ${
            companies[1] ? companies[1] : ""
          }, ${companies[2] ? companies[2] : ""}, ${
            companies[3] ? companies[3] : ""
          }`}
          ...
        </FooterTitle>
      </CardFooter>
    </>
  );
}

export default QCard;
