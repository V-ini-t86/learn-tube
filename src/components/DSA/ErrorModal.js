import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SubmitButton } from "../template/FormComponents";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  background: "#00051d",
  color: "white",
  borderRadius: "19px",
  boxShadow: 24,
  p: "1rem 2rem 1rem 2rem",
};
const Title = styled("h2")({
  fontFamily: "PT Sans",
  color: "white",
  fontWeight: 400,
  fontSize: "30px",
  lineHeight: "47px",
});

export default function ErrorModal({ open, setOpen }) {
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" gap="1rem" sx={style}>
          <Title>Please Login,Then try again</Title>
          <SubmitButton onClick={() => navigate("/login")}>Login</SubmitButton>
        </Box>
      </Modal>
    </div>
  );
}
