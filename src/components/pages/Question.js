import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../home/Navbar";

function Question() {
  const { quename } = useParams();
  return (
    <>
      <Navbar />
      <div>
        <h1>{quename}</h1>
      </div>
    </>
  );
}

export default Question;
