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
import {
  Form,
  TwoColumn,
  Image,
  Title,
  SubTitle,
  FormControlBox,
  IconBtn,
  Input,
  SubmitButton,
  Container,
  NavContainer,
  LinkToAccount,
  FormContainer,
  Inline,
} from "../template/FormComponents";
import NavHeader from "../home/NavHeader";
import LoginImage from "../../images/login-image3.png";

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
    const result = EMAIL_RGX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_RGX.test(password);
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
  }

  return (
    <Container>
      <NavContainer>
        <NavHeader />
      </NavContainer>
      <TwoColumn>
        <Image src={LoginImage} alt="login-image" />
        <FormContainer>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Inline>
                <Title>Welcome to </Title>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    color: "white",
                    marginLeft: "0.5rem",
                    fontWeight: 400,
                  }}
                  component="h4"
                  fontWeight="light"
                >
                  LEARN-TUBE
                </Typography>
              </Inline>
              <Inline>
                <SubTitle>already have an Account? </SubTitle>{" "}
                <Link style={{ textDecoration: "none" }} to="/login">
                  <LinkToAccount> Sign in</LinkToAccount>
                </Link>
              </Inline>
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
                <Input
                  type="text"
                  label="Name"
                  placeholder="Name"
                  autoComplete="off"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControlBox>
              <FormControlBox>
                <Input
                  label="Email"
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </FormControlBox>
              <FormControlBox>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControlBox>
              <FormControlBox>
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder="Confirm Password"
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
        </FormContainer>
      </TwoColumn>
    </Container>
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
