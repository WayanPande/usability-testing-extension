import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Question from "./page/question.jsx";
import { FormatTime } from "./util/timeFormat";
import QuesionList from "./util/questionList.js";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Identity from "./page/identity.jsx";

const App = () => {
  const page = useSelector((state) => state.page);
  const identity = useSelector((state) => state.identity);
  const timer = useSelector((state) => state.timer);
  const counter = useSelector((state) => state.counter);
  const isReady = useSelector((state) => state.isReady);
  const data = useSelector((state) => state.data);
  const showDialog = useSelector((state) => state.showDialog);
  const dispatch = useDispatch();

  const nextButton = () => {
    const hasil = {
      time: timer,
      click: counter,
    };
    // console.log(hasil);
    dispatch({ type: "page" });
    if (page !== 0) {
      dispatch({ type: "finishQuestion", data: hasil });
    }
  };

  useEffect(() => {
    console.log(data);
    console.table(identity);
  }, [data, identity]);

  return (
    <Card>
      {showDialog && (
        <div className="p-6 w-96 flex flex-col gap-3 text-black">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">
              {page === 0 && "Scenario"}
              {page >= 2 && `Step ${page - 1} of 10`}
              {page === 1 && "Identitas Peserta"}
            </h1>
            {page >= 2 ? <p>{FormatTime(timer)}</p> : null}
          </div>
          <hr />
          {page === 0 && (
            <Fragment>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus officiis nisi sunt? Dolorem unde, eveniet deserunt modi
                rem ducimus natus!
              </p>
            </Fragment>
          )}
          {page === 1 && <Identity />}
          {page >= 2 && <Question question={QuesionList[page - 1]} />}
          <div className="flex gap-3 justify-end">
            {page >= 2 ? (
              <Button
                variant="contained"
                className="text-white rounded-lg"
                color="success"
                onClick={nextButton}
              >
                Next step
              </Button>
            ) : null}
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
