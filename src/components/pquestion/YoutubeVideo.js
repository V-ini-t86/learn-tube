import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import {
  ThumbUpAltOutlined,
  ThumbUp,
  WatchLaterOutlined,
  WatchLater,
  PlaylistAdd,
  PlaylistAddCheck,
} from "@mui/icons-material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { getHeaders, userId } from "../../utils/config";
import { fetchAllQuestionsClickedByUser } from "../../Redux/question/questionsActions";

function YoutubeVideo({ currVid }) {
  const params = useParams();
  const allQuestions = useSelector((state) => state.dsa);

  const pquestion = allQuestions.items[params.queId];
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [question, setQuestions] = useState(pquestion);
  const [userSelectedQuestion, setUserSelectedQuestion] = useState({});

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllQuestionsClickedByUser(dispatch, JSON.parse(auth.user).userId);
  }, []);
  console.log({
    id: params.queId,
    userSelectedQuestion,
  });
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const userQuestions = JSON.parse(
      localStorage.getItem("user-selected-questions")
    );
    const thisQuestion = userQuestions.questions.filter(
      (val) => val.questionId === params.queId
    );
    async function getThisQuestion() {
      try {
        console.log(thisQuestion[0]);
        const { data } = await axios.get(
          `/api/question/${thisQuestion[0]._id}`,
          {
            headers: getHeaders(),
          }
        );
        setUserSelectedQuestion(data.question);
        setIsLiked(data.question.liked);
        setIsWatchLater(data.question.watchLater);
      } catch (error) {
        console.log(error.message);
      }
    }
    getThisQuestion();

    // setUserSelectedQuestion({ ...thisQuestion });
    // setIsLiked(thisQuestion.length > 0 && thisQuestion[0].liked);
    // setIsWatchLater(thisQuestion.length > 0 && thisQuestion[0].watchLater);
  }, []);

  function likedHandler() {
    const updateLiked = async () => {
      try {
        const id = userSelectedQuestion._id;
        console.log(id);
        const { data } = await axios.put(
          `/api/question/${params.queId}`,
          {
            id: id,
            userId: userId,
            questionId: params.queId,
            isLiked: !isLiked,
            isWatchLater: isWatchLater,
          },
          { headers: getHeaders() }
        );
        console.log(data);
        setIsLiked(!isLiked);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateLiked();
  }
  function watchLaterHandler() {
    const updateWatchLater = async () => {
      try {
        const id = userSelectedQuestion._id;
        console.log(id);
        const { data } = await axios.put(
          `/api/question/${params.queId}`,
          {
            id: id,
            userId: userId,
            questionId: params.queId,
            isLiked: isLiked,
            isWatchLater: !isWatchLater,
          },
          { headers: getHeaders() }
        );
        console.log(data);
        setIsWatchLater(!isWatchLater);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateWatchLater();
  }

  return (
    <>
      <h3>{question.name}</h3>
      <YouTube videoId={currVid} opts={opts} />
      <Tooltip title={isLiked ? "Unlike" : "I like this"}>
        <IconButton onClick={likedHandler}>
          {isLiked === true ? <ThumbUp /> : <ThumbUpAltOutlined />}
        </IconButton>
      </Tooltip>
      <Tooltip
        title={
          isWatchLater ? "Added to watch later" : "want to add to watch later"
        }
      >
        <IconButton onClick={watchLaterHandler}>
          {isWatchLater ? <WatchLater /> : <WatchLaterOutlined />}
        </IconButton>
      </Tooltip>
      <IconButton>
        <PlaylistAdd />
      </IconButton>
    </>
  );
}

export default YoutubeVideo;
