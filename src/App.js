import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import UserContext from "./contexts/UserContext";
import Timeline from "./components/timeline/Timeline";
import Challenge from "./components/challenge/Challenge";

export default function App() {
  const [token, setToken] = useState("");
  const [imageProfile, setImageProfile] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j_oBeno7O0PyqNpf4xJK4yOu7emIlodCW3AYpBriXg&s"
  );

  return (
    <UserContext.Provider
      value={{ token, setToken, imageProfile, setImageProfile }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Timeline />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
