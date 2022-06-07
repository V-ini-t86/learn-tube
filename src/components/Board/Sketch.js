import { createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { IconButton, Tooltip } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import CreateIcon from "@mui/icons-material/Create";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  height: "700px",
};

const Sketch = () => {
  const sketchRef = createRef();
  function penFunc() {
    sketchRef.current.eraseMode(false);
  }
  function undofunc() {
    sketchRef.current.undo();
  }
  function clearAll() {
    sketchRef.current.clearCanvas();
  }
  function redofunc() {
    sketchRef.current.redo();
  }

  function eraseFunc() {
    sketchRef.current.eraseMode(true);
  }
  return (
    <div>
      <Tooltip title="Pen">
        <IconButton onClick={penFunc}>
          <CreateIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Redo">
        <IconButton onClick={redofunc}>
          <RedoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Clear">
        <IconButton onClick={clearAll}>
          <ClearAllIcon />
        </IconButton>
      </Tooltip>
      <Tooltip>
        <Tooltip title="Undo">
          <IconButton onClick={undofunc}>
            <UndoIcon />
          </IconButton>
        </Tooltip>
      </Tooltip>
      <Tooltip title="Erase">
        <IconButton onClick={eraseFunc}>
          <p>Erase</p>
        </IconButton>
      </Tooltip>

      <ReactSketchCanvas
        ref={sketchRef}
        style={styles}
        width="900"
        height="800"
        strokeWidth={4}
        strokeColor="red"
      />
    </div>
  );
};
export default Sketch;
