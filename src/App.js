import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import UserContext from "./contexts/UserContext";
import Timeline from "./components/timeline/Timeline";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Timeline />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
