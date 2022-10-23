import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";

const AppPopup = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: "dialog" });
  };

  return (
    <div className="p-6 w-96 flex flex-col gap-3 ">
      <h1 className="font-bold text-center">Usability Testing</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia
        rerum ex quibusdam, laboriosam pariatur.
      </p>
      <button
        onClick={clickHandler}
        className="py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700"
      >
        Start
      </button>
    </div>
  );
};

export default AppPopup;
