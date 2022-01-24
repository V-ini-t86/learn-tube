import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MDEditor from "@uiw/react-md-editor";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import YouTube from "react-youtube";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function QTabs({
  languages = ["cpp", "java", "js", "c", "css", "go", "ruby"],
}) {
  const [value, setValue] = React.useState(0);
  const [textEditorValue, setTextEditorValue] = useState("**Hello World**");
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState(languages[0]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Question" {...a11yProps(0)} />
          <Tab label="Notes" {...a11yProps(1)} />
          <Tab label="Code" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h3>1. Two Sum</h3>
        <YouTube videoId="dRUpbt8vHpo" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MDEditor value={textEditorValue} onChange={setTextEditorValue} />
        <MDEditor.Markdown source={textEditorValue} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="language"
              onChange={handleLanguageChange}
            >
              {languages.map((lang, i) => {
                return (
                  <MenuItem key={i} value={lang}>
                    {lang}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <CodeEditor
          value={code}
          language={language}
          placeholder={`Please enter ${language} code.`}
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 15,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </TabPanel>
    </Box>
  );
}

export default QTabs;
