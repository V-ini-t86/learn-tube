import React, { useEffect } from "react";
import tw from "twin.macro";
import QCard from "../template/Card";
import { fetchDsa } from "../../Redux/question/questionsActions";
import { connect } from "react-redux";
import ButtonInteraction from "../DSA/ButtonInteraction";

const Container = tw.div`mx-5`;

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
      <ButtonInteraction />
      {/* {items &&
        items.map((val) => {
          return <QCard key={val.id} que={val} />;
        })} */}
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
