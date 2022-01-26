import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DSA from "./components/pages/DSA";
import Error from "./components/pages/Error";
import Question from "./components/pages/Question";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dsa/:quename" element={<Question />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
