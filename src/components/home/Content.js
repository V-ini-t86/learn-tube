import React from "react";
import tw from "twin.macro";
import QCard from "../template/Card";
import { questions } from "../question";

const Container = tw.div`ml-5 sm:ml-5 lg:ml-64 md:ml-5 grid gap-12 grid-cols-3 grid-rows-3 mx-4`;

function Content() {
  return (
    <Container>
      {questions.map((val) => {
        return <QCard key={val.id} que={val} />;
      })}
    </Container>
  );
}

export default Content;
