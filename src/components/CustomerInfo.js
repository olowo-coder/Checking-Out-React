import React, { useState } from "react";
import "./CustomerInfo.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomerInfo() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
  };
  return (
    <div>
      {/* <Container maxWidth="sm" >
          <Box sx={{ borderRadius: 16 }}>
          <div className="heading">Customer Info</div>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            aria-describedby="my-helper-text"
            value={values.amount}
            onChange={handleChange("amount")}
          />
        </FormControl>
          </Box>
      </Container> */}
      <div className="container">
        <div className="row split title-content">
          <div className="design heading">Customer Info</div>
          <div className="design">*Required</div>
        </div>
        <div className="info-input title-content input-container">
          <label>Email* </label>
          <input type="text" name="customer-info" value={values.customer} />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
