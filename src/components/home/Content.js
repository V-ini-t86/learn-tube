import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { Stack } from "@mui/material";
import ReactPaginate from "react-paginate";
import QCard from "../template/Card";
import { fetchDsa } from "../../Redux/question/questionsActions";
import { connect } from "react-redux";
import { styled, theme } from "@mui/system";
import ButtonInteraction from "../DSA/ButtonInteraction";

import Header from "../DSA/Header";
import Topics from "../DSA/Topics";

import BackgroundImage from "../../images/bg-dsa.jpg";
import PaginatedItems from "./PaginatedItems";

// const Container = tw.div`mx-5`;
const Container = styled("div")(({ theme }) => ({
  // background: `url(${BackgroundImage})`,
  // backgroundSize: "contain, cover",
  // backgroundRepeat: "no-repeat",
  background: `#373e98`,
  padding: "20vh 10vh",
}));

function Content({ loading, error, items, fetchDsa }) {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  console.log(screenWidth);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, [screenWidth]);

  useEffect(() => {
    fetchDsa();
  }, []);
  if (loading === true) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Stack alignItems="center" gap="15vh">
        <Header />
        <ButtonInteraction />
      </Stack>
      <Topics />
      <PaginatedItems itemsPerPage={15} questions={items} />
      {/* <div>
        {items &&
          items.map((val) => {
            return <QCard key={val.id} que={val} />;
          })}
      </div> */}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.dsa.loading,
    error: state.dsa.error,
    items: state.dsa.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDsa: () => dispatch(fetchDsa()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
