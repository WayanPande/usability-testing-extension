import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Question = (props) => {
  const isReady = useSelector((state) => state.isReady);
  const dispatch = useDispatch();
  const question = props.question;
  const [isFinished, setIsFinished] = useState(false);

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

  useEffect(() => {
    setIsFinished(false);
  }, [question]);

  const finishHandler = () => {
    setIsFinished(true);
    dispatch({ type: "ready" });
  };

  const skipHandler = () => {
    dispatch({ type: "ready" });
    props.nextButton(true);
  };

  const readyHandler = () => {
    dispatch({ type: "ready" });
  };

  return (
    <div className="flex flex-col w-96">
      <h1>{question.title}</h1>
      {!isFinished && (
        <div className="flex items-end justify-between justify-items-end">
          {isReady && (
            <Button variant="outlined" onClick={skipHandler}>
              Skip
            </Button>
          )}
          <Button
            variant="contained"
            color={isReady ? "error" : "info"}
            className="rounded-md bg-blue-300 hover:bg-blue-500 py-2 mt-4 font-bold"
            onClick={isReady ? finishHandler : readyHandler}
          >
            {isReady ? "Finish" : "Start"}
          </Button>
        </div>
      )}
      {isFinished && (
        <Button
          variant="contained"
          className="text-white rounded-lg py-2 mt-4 font-bold"
          color="success"
          onClick={() => props.nextButton()}
        >
          Next step
        </Button>
      )}
    </div>
  );
};

export default Question;
