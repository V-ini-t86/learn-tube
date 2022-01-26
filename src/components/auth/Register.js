import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import tw from "twin.macro";
import { styled } from "@mui/material/styles";
import { PropTypes } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Form = tw.form`flex flex-col w-4/12`;
const FormControlBox = styled(FormControl)({
  marginTop: "20px",
});
const SubmitButton = styled(Button)({
  marginTop: "20px",
});

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };
    registerUser(newUser, navigate, dispatch);
    console.log(newUser);
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
          Register
        </Typography>
        <p className="grey-text text-darken-1">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>

      <Form onSubmit={submitHandler}>
        <FormControlBox>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </FormControlBox>
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
        <FormControlBox>
          <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
          <OutlinedInput
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControlBox>
        <SubmitButton type="submit" variant="contained" color="info">
          Sign Up
        </SubmitButton>
      </Form>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
export { withRouter };

export default connect(
  mapStateToProps,
  { registerUser },
  withRouter(Register)
)(Register);
