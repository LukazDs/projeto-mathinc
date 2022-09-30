import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginStyle } from "./loginStyle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const URL = `${process.env.REACT_APP_API_BASE_URL}/user/register`;
    const body = { email, password };

    const promise = axios.post(URL, body, {});
  }

  return (
    <loginStyle.Container>
      <loginStyle.InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
        <span>MathInc</span>
      </loginStyle.InfoLogo>
      <loginStyle.Forms onSubmit={loginUser}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        />
        <button>Login</button>
      </loginStyle.Forms>
      <Link to={"/register"}>Not registered? Register now.</Link>
    </loginStyle.Container>
  );
}

export default Login;
