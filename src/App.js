import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DSA from "./components/pages/DSA";
import Error from "./components/pages/Error";
import Question from "./components/pages/Question";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/dsa/:quename" element={<Question />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
