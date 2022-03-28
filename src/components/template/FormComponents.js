import { Box, Button, FormControl, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import tw from "twin.macro";

export const Form = tw.form`flex mt-9 flex-col w-7/12 gap-9 `;
export const TwoColumn = tw.div`grid items-center justify-items-center md:grid-cols-2 lg:grid-cols-2 gap-4`;
export const Image = tw.img`w-7/12`;
export const FormControlBox = styled(FormControl)({});
export const IconBtn = styled(IconButton)({
  background: "white",
  width: "40px",
  textAlign: "center",
  "&:hover": {
    background: "white",
  },
});
export const Input = styled("input")({
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

export const SubmitButton = styled(Button)({
  background: "linear-gradient(180deg, #14BBEA 0%, #019FCB 100%)",
  borderRadius: "8px",
  fontFamily: "Open Sans",
  fontWeight: 700,
  lineHeight: "33px",
  color: "#ffffff",
  fontSize: "large",
});

export const Container = styled(Box)(({ theme }) => ({
  padding: "2rem 0rem",
  background: "linear-gradient(180deg, #001435 0%, #023384 100%)",
  height: "100%",
  width: "100%",
}));

export const NavContainer = tw.div`mx-6`;
export const Title = styled("h3")({
  fontFamily: "PT Sans",
  color: "white",
  fontWeight: 400,
  fontSize: "36px",
  lineHeight: "47px",
});

export const SubTitle = styled("h5")({
  fontFamily: "PT Sans",
  color: "white",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "31px",
});
export const LinkToAccount = styled("h5")({
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

export const FormContainer = styled(Box)(({ theme }) => ({
  padding: "2rem 0.5rem 2rem 0.5rem",
  background: "#00051d",
  color: "white",
  borderRadius: "19px",
  width: "600px",
}));

export const Inline = tw.div`flex items-end mt-2`;
