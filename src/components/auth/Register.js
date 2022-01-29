import React, { useState, useRef, useEffect } from "react";
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
import { registerUser } from "../../Redux/actions/authActions";

const Form = tw.form`flex flex-col w-4/12`;
const FormControlBox = styled(FormControl)({
  marginTop: "20px",
});
const SubmitButton = styled(Button)({
  marginTop: "20px",
});

const PWD_RGX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const EMAIL_RGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Register() {
  const userRef = useRef();
  const errorRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPwd, setValidConfirmPwd] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("hello");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(()=>{
  //   const result =
  //   setValidName(true)
  // },[])
  useEffect(() => {
    const result = EMAIL_RGX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_RGX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === confirmPassword;
    setValidConfirmPwd(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrorMsg("");
  }, [name, email, password, confirmPassword]);

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
      <p
        ref={errorRef}
        className={errorMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <Form onSubmit={submitHandler}>
        <FormControlBox>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            type="text"
            label="Name"
            ref={userRef}
            autoComplete="off"
            required
            aria-invalid={validName ? true : false}
            aria-describedby="uidnote"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
        </FormControlBox>
        <FormControlBox>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            aria-invalid={validEmail ? true : false}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
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
        <FormControlBox>
          <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
          <OutlinedInput
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
