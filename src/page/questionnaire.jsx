import React, { useState } from "react";
import QuestionnaireRadio from "../components/questionnaireForm.jsx";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const Questionnaire = () => {
  const [values, setValues] = useState({
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
  });
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "questionnaire", questionnaire: values });
  };

  return (
    <form
      className="flex flex-col h-96 gap-3 overflow-y-scroll px-3"
      onSubmit={handleSubmit}
    >
      <QuestionnaireRadio
        question="Saya berpikir akan menggunakan sistem ini lagi"
        handleChange={handleChange}
        type="question_1"
      />
      <QuestionnaireRadio
        question="Saya merasa sistem ini rumit untuk digunakan"
        handleChange={handleChange}
        type="question_2"
      />
      <QuestionnaireRadio
        question="Saya merasa sistem ini mudah digunakan"
        handleChange={handleChange}
        type="question_3"
      />
      <QuestionnaireRadio
        question="Saya membutuhkan bantuan dari orang lain atau teknisi dalam
menggunakan sistem ini"
        handleChange={handleChange}
        type="question_4"
      />
      <QuestionnaireRadio
        question="Saya merasa fitur-fitur sistem ini berjalan dengan semestinya"
        handleChange={handleChange}
        type="question_5"
      />
      <QuestionnaireRadio
        question="Saya merasa ada banyak hal yang tidak konsisten (tidak serasi pada sistem
ini)"
        handleChange={handleChange}
        type="question_6"
      />
      <QuestionnaireRadio
        question="Saya merasa orang lain akan memahami cara menggunakan sistem ini
dengan cepat"
        handleChange={handleChange}
        type="question_7"
      />
      <QuestionnaireRadio
        question="Saya merasa sistem ini membingungkan"
        handleChange={handleChange}
        type="question_8"
      />
      <QuestionnaireRadio
        question="Saya merasa tidak ada hambatan dalam menggunakan sistem ini"
        handleChange={handleChange}
        type="question_9"
      />
      <QuestionnaireRadio
        question="Saya perlu membiasakan diri terlebih dahulu sebelum menggunakan
sistem ini"
        handleChange={handleChange}
        type="question_10"
      />
      <Button
        variant="contained"
        color={"info"}
        className="rounded-md bg-blue-300 hover:bg-blue-500 py-2 mt-4 font-bold"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Questionnaire;
