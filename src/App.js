import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DSA from "./components/pages/DSA";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsa" element={<DSA />} />
      </Routes>
    </div>
  );
}

export default App;
