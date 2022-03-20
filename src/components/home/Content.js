import React, { useEffect } from "react";
import tw from "twin.macro";
import QCard from "../template/Card";
import { fetchDsa } from "../../Redux/question/questionsActions";
import { connect } from "react-redux";

const Container = tw.div`ml-5 sm:ml-5 lg:ml-64 md:ml-5 grid gap-12 grid-cols-3 grid-rows-3 mx-4`;

function Content({ loading, error, items, fetchDsa }) {
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
      {items &&
        items.map((val) => {
          return <QCard key={val.id} que={val} />;
        })}
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
