import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchAllQuestionsClickedByUser } from "../../Redux/question/questionsActions";
import Navbar from "../home/Navbar";

function Home() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(auth);
  useEffect(() => {
    // fetchAllQuestionsClickedByUser(dispatch, auth.user);
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Home Page of Learn-Tube</h1>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUserQuestions: (userId) =>
//       dispatch(fetchAllQuestionsClickedByUser(), userId),
//   };
// };

export default Home;
