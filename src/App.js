import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
