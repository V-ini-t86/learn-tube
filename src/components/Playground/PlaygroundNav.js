import React from "react";
import Select from "react-select";
import { styled, theme } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./PlaygroundNav.css";
import Logo from "../../images/LTlogo.svg";
// ../../images/LTlogo.svg

const LogoBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "0px",
  margin: "5px",
  "&:hover": {
    backgroundColor: "white",
  },
}));
const LogoImg = styled("img")(({ theme }) => ({
  width: 50,
  height: 50,
  color: "white",
  borderRadius: "1rem",
}));

const PlaygroundNav = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "c++", label: "cpp17" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];
  return (
    <div className="navbar">
      <Link to="/">
        <LogoBtn>
          <LogoImg className="logo" src={Logo} alt="logo" />
        </LogoBtn>
      </Link>
      <h1>Learn Tube Compiler</h1>
      <Select
        options={languages}
        value={userLang}
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
      <Select
        options={themes}
        value={userTheme}
        onChange={(e) => setUserTheme(e.value)}
        placeholder={userTheme}
      />
      <label>Font Size</label>
      <input
        type="range"
        min="18"
        max="30"
        value={fontSize}
        step="2"
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
    </div>
  );
};

export default PlaygroundNav;
