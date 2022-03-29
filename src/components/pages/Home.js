import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchAllQuestionsClickedByUser } from "../../Redux/question/questionsActions";
import Navbar from "../home/Navbar";

function Home() {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar />
      <h1>Home Page of Learn-Tube</h1>
    </div>
  );
}

export default Home;
