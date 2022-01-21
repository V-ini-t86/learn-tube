import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MDEditor from "@uiw/react-md-editor";
import Box from "@mui/material/Box";
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

function QTabs() {
  const [value, setValue] = React.useState(0);
  const [textEditorValue, setTextEditorValue] = useState("**Hello World**");

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
        Save Your Code
      </TabPanel>
    </Box>
  );
}

export default QTabs;
