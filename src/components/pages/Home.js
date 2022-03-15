import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../home/Navbar";

function Home() {
  const state = useSelector((state) => state.auth);
  console.log(state);
  return (
    <div>
      <Navbar />
      <h1>Home Page of Learn-Tube</h1>
    </div>
  );
}

export default Home;
