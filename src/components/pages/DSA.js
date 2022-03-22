import React from "react";
import { Helmet } from "react-helmet";
import Content from "../home/Content";
import Navbar from "../home/Navbar";
import Sidebar from "../home/Sidebar";

function DSA() {
  return (
    <div>
      <Helmet>
        <title>DSA | LEETCODE</title>
      </Helmet>
      <Navbar />
      {/* <Sidebar /> */}
      <Content />
    </div>
  );
}

export default DSA;
