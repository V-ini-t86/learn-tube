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
import { withTheme } from "styled-components";

const Form = tw.form`flex mt-9 flex-col w-7/12 gap-9 `;
const TwoColumn = tw.div`grid items-center justify-items-center md:grid-cols-2 lg:grid-cols-2 gap-4`;
const Image = tw.img`w-7/12`;
const FormControlBox = styled(FormControl)({});
const IconBtn = styled(IconButton)({
  background: "white",
  width: "40px",
  textAlign: "center",
  "&:hover": {
    background: "white",
  },
});
const Input = styled("input")({
  color: "white",
  padding: "5px 10px 5px 25px",
  background: "#000000",
  fontFamily: "PT Sans",
  border: "1px solid #CCCCCC",
  boxSizing: "border-box",
  borderRadius: "8px",
  fontWeight: 500,
  fontSize: "large",
  lineHeight: "31px",
});

const SubmitButton = styled(Button)({
  background: "linear-gradient(180deg, #14BBEA 0%, #019FCB 100%)",
  borderRadius: "8px",
  fontFamily: "Open Sans",
  fontWeight: 700,
  lineHeight: "33px",
  color: "#ffffff",
  fontSize: "large",
});

const Container = styled(Box)(({ theme }) => ({
  padding: "2rem 0rem",
  background: "linear-gradient(180deg, #001435 0%, #023384 100%)",
  height: "100%",
  width: "100%",
}));

const NavContainer = tw.div`mx-6`;
const Title = styled("h3")({
  fontFamily: "PT Sans",
  color: "white",
  fontWeight: 400,
  fontSize: "36px",
  lineHeight: "47px",
});

const SubTitle = styled("h5")({
  fontFamily: "PT Sans",
  color: "white",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "31px",
});
const LinkToAccount = styled("h5")({
  fontFamily: "PT Sans",
  color: "#1D70EE",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "31px",
  marginLeft: "5px",
  transition: "0.5s",
  "&:hover": {
    color: "white",
  },
});

const FormContainer = styled(Box)(({ theme }) => ({
  padding: "2rem 0.5rem 2rem 0.5rem",
  background: "#00051d",
  color: "white",
  borderRadius: "19px",
  width: "600px",
}));

const Inline = tw.div`flex items-end mt-2`;

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
                  type="email"
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
