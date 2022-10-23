import React, { Fragment, useEffect, useState } from "react";
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

    const url =
      "https://script.google.com/macros/s/AKfycbwsCu0S5z0Zu6EZ-ZKkh-uoGlERvpJsITJ11ngjOOdQnRU1V1_AG1ntbGHv7pQozzs/exec";
    let formData = new FormData();

    formData.append("nama", values.nama);
    formData.append("email", values.email);
    formData.append("umur", values.umur);
    formData.append("kelamin", values.kelamin);

    // fetch(url, { method: "POST", body: formData })
    //   .then((response) => console.log("Success!", response))
    //   .catch((error) => console.error("Error!", error.message));

    dispatch({ type: "identity", identity: values });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className="flex flex-col gap-3 w-full" onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        label="Nama"
        inputProps={{ "aria-label": "nama" }}
        onChange={handleChange("nama")}
      />
      <TextField
        variant="outlined"
        label="Email"
        type={"email"}
        inputProps={{ "aria-label": "email" }}
        onChange={handleChange("email")}
      />
      <TextField
        variant="outlined"
        label="Umur"
        type={"number"}
        inputProps={{ "aria-label": "umur" }}
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
          inputProps={{ "aria-label": "kelamin" }}
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
