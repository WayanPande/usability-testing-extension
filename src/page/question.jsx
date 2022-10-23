import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Question = (props) => {
  const counter = useSelector((state) => state.counter);
  const timer = useSelector((state) => state.timer);
  const isReady = useSelector((state) => state.isReady);
  const dispatch = useDispatch();
  const question = props.question;

  useEffect(() => {
    let interval;
    if (isReady) {
      interval = setInterval(() => dispatch({ type: "timer" }), 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isReady]);

  const readyHandler = () => {
    dispatch({ type: "ready" });
  };

  return (
    <div className="flex flex-col">
      <h1>Perintah {question.id}</h1>
      <p>{question.title}</p>
      <Button
        variant="contained"
        color={isReady ? "error" : "info"}
        className="rounded-md bg-blue-300 hover:bg-blue-500 py-2 mt-4 font-bold"
        onClick={readyHandler}
      >
        {isReady ? "Stop" : "Start"}
      </Button>
    </div>
  );
};

export default Question;
