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
import { backendServerURL, getHeaders, userId } from "../../utils/config";
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
        const { data } = await axios.get(
          `${backendServerURL}/api/question/${thisQuestion[0]._id}`,
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
  }, []);

  function likedHandler() {
    const updateLiked = async () => {
      try {
        const id = userSelectedQuestion._id;
        const { data } = await axios.put(
          `${backendServerURL}/api/question/${params.queId}`,
          {
            id: id,
            userId: userId,
            questionId: params.queId,
            isLiked: !isLiked,
            isWatchLater: isWatchLater,
          },
          { headers: getHeaders() }
        );
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
        const { data } = await axios.put(
          `${backendServerURL}/api/question/${params.queId}`,
          {
            id: id,
            userId: userId,
            questionId: params.queId,
            isLiked: isLiked,
            isWatchLater: !isWatchLater,
          },
          { headers: getHeaders() }
        );
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
