import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Question from "./page/question.jsx";
import { FormatTime } from "./util/timeFormat";
import QuesionList from "./util/questionList.js";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Identity from "./page/identity.jsx";
import Questionnaire from "./page/questionnaire.jsx";
import CheckTask from "./util/checkTask.js";

const App = (props) => {
  const page = useSelector((state) => state.page);
  const isReady = useSelector((state) => state.isReady);
  const timer = useSelector((state) => state.timer);
  const counter = useSelector((state) => state.counter);
  const data = useSelector((state) => state.data);
  const showDialog = useSelector((state) => state.showDialog);
  const dispatch = useDispatch();

  const nextButton = (isSkipped = false) => {
    const hasil = {
      time: timer,
      click: counter,
      skip: isSkipped,
    };
    // console.log(hasil);
    dispatch({ type: "page" });
    if (page !== 0) {
      dispatch({ type: "finishQuestion", data: hasil });
    }
  };

  const successHandler = () => {
    dispatch({ type: "ready" });
    nextButton();
  };

  useEffect(() => {
    if (isReady) {
      CheckTask(page, successHandler);
    }
  }, [isReady, page, counter]);

  return (
    <Card>
      {showDialog && (
        <div className="p-6 flex flex-col gap-3 text-black">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">
              {page === 0 && "Scenario"}
              {page >= 2 &&
                page !== QuesionList.length + 2 &&
                `Step ${page - 1} of ${QuesionList.length}`}
              {page === 1 && "Identitas Peserta"}
              {page === QuesionList.length + 2 && "Questionnnaire Akhir"}
            </h1>
            {page >= 2 && page !== QuesionList.length + 2 ? (
              <p>{FormatTime(timer)}</p>
            ) : null}
          </div>
          <hr />
          {page === 0 && (
            <div className="w-96">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus officiis nisi sunt? Dolorem unde, eveniet deserunt modi
                rem ducimus natus!
              </p>
            </div>
          )}
          {page === 1 && <Identity />}
          {page >= 2 && page !== QuesionList.length + 2 && (
            <Question
              question={QuesionList[page - 2]}
              nextButton={nextButton}
            />
          )}
          {page === QuesionList.length + 2 && <Questionnaire />}
          {/* <Questionnaire /> */}
          <div className="flex gap-3 justify-end">
            {page === 0 ? (
              <Button
                variant="contained"
                color="success"
                className="text-white rounded-lg"
                onClick={nextButton}
              >
                Next step
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </Card>
  );
};

export default App;
