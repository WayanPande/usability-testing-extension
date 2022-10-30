import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const Identity = () => {
  const [values, setValues] = useState({
    nama: "",
    email: "",
    umur: "",
    kelamin: "P",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "identity", identity: values });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className="flex flex-col gap-3 w-96" onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        label="Nama"
        inputprops={{ "aria-label": "nama" }}
        onChange={handleChange("nama")}
      />
      <TextField
        variant="outlined"
        label="Email"
        type={"email"}
        inputprops={{ "aria-label": "email" }}
        onChange={handleChange("email")}
      />
      <TextField
        variant="outlined"
        label="Umur"
        type={"number"}
        inputprops={{ "aria-label": "umur" }}
        onChange={handleChange("umur")}
      />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Jenis Kelamin
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={values.kelamin}
          inputprops={{ "aria-label": "kelamin" }}
          onChange={handleChange("kelamin")}
        >
          <FormControlLabel value="L" control={<Radio />} label="Laki - Laki" />
          <FormControlLabel value="P" control={<Radio />} label="Perempuan" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Identity;
