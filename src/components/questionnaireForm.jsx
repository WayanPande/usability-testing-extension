import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const QuestionnaireRadio = (props) => {
  return (
    <FormControl className="gap-3">
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        className="font-semibold"
      >
        {props.question}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        inputProps={{ "aria-label": props.type }}
        onChange={props.handleChange(props.type)}
      >
        <FormControlLabel
          value="1"
          labelPlacement="top"
          control={<Radio />}
          label="STS"
        />
        <FormControlLabel
          value="2"
          labelPlacement="top"
          control={<Radio />}
          label="TS"
        />
        <FormControlLabel
          value="3"
          labelPlacement="top"
          control={<Radio />}
          label="RG"
        />
        <FormControlLabel
          value="4"
          labelPlacement="top"
          control={<Radio />}
          label="ST"
        />
        <FormControlLabel
          value="5"
          labelPlacement="top"
          control={<Radio />}
          label="SS"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default QuestionnaireRadio;
