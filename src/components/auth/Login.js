import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { loginUser } from "../../Redux/actions/authActions";
import { connect, useDispatch } from "react-redux";
import { useAuthStateValue } from "../../context/AuthProvider";
import NavHeader from "../home/NavHeader";
import GoogleIcon from "../../images/company/google.png";
import LoginImage from "../../images/login-image3.png";
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
    auth.isAuthenticated && navigate("/");
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
                <SubTitle>new To Learn-Tube? </SubTitle>{" "}
                <Link style={{ textDecoration: "none" }} to="/register">
                  <LinkToAccount> Create an account</LinkToAccount>
                </Link>
              </Inline>
            </div>

            <Form onSubmit={submitHandler}>
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
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControlBox>
              <SubmitButton type="submit" variant="contained" color="info">
                Login
              </SubmitButton>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="10px"
              >
                <p>or sign in with</p>
                <IconBtn>
                  <img src={GoogleIcon} alt="google-icon" />
                </IconBtn>
              </Box>
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

export default connect(mapStateToProps, { loginUser })(Login);
