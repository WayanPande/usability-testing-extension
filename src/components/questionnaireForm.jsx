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
        <b className="text-lg">{props.question}</b>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        inputprops={{ "aria-label": props.type }}
        onChange={props.handleChange(props.type)}
      >
        <FormControlLabel
          value="1"
          labelPlacement="bottom"
          control={<Radio />}
          label={
            <div className="text-center">
              <p>1</p>
              <p>Sangat Tidak Setuju</p>
            </div>
          }
        />
        <FormControlLabel
          value="2"
          labelPlacement="bottom"
          control={<Radio />}
          label="2"
        />
        <FormControlLabel
          value="3"
          labelPlacement="bottom"
          control={<Radio />}
          label="3"
        />
        <FormControlLabel
          value="4"
          labelPlacement="bottom"
          control={<Radio />}
          label="4"
        />
        <FormControlLabel
          value="5"
          labelPlacement="bottom"
          control={<Radio />}
          label={
            <div className="text-center">
              <p>5</p>
              <p>Sangat Setuju</p>
            </div>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default QuestionnaireRadio;
