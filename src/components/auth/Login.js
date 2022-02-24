import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { loginUser } from "../../Redux/actions/authActions";
import { connect, useDispatch } from "react-redux";
import { useAuthStateValue } from "../../context/AuthProvider";

const Form = tw.form`flex flex-col w-4/12`;
const FormControlBox = styled(FormControl)({
  marginTop: "20px",
});
const SubmitButton = styled(Button)({
  marginTop: "20px",
});

function Login() {
  const { setAuth } = useAuthStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  function submitHandler(e) {
    e.preventDefault();
    const existingUser = {
      email,
      password,
    };

    loginUser(existingUser, dispatch, setAuth);
    // console.log(existingUser);
    auth.isAuthenticated && navigate("/");
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
        </FormControlBox>
        <FormControlBox>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControlBox>
        <SubmitButton type="submit" variant="contained" color="info">
          Login
        </SubmitButton>
      </Form>
    </Box>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
