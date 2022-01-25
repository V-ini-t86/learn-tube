import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import { styled } from "@mui/material/styles";

const Form = tw.form`flex flex-col w-4/12`;
const FormControlBox = styled(FormControl)({
  marginTop: "20px",
});
const SubmitButton = styled(Button)({
  marginTop: "20px",
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const existingUser = {
      email,
      password,
    };
    console.log(existingUser);
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <Typography component="h2" variant="h2">
          Login
        </Typography>
        <p className="grey-text text-darken-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>

      <Form onSubmit={submitHandler}>
        <FormControlBox>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </FormControlBox>
        <FormControlBox>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControlBox>
        <SubmitButton type="submit" variant="contained" color="info">
          Login
        </SubmitButton>
      </Form>
    </Box>
  );
}
