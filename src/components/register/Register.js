import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../assets/loaders/Loading";
import { registerStyle } from "./registerStyle";
import DefaultContainer from "../../assets/styles/defaultContainer/DefaultContainer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();

    setIsLoading(true);

    if (password !== confirmedPassword) {
      setIsLoading(false);
      alert("Senha e confirmar senha são diferentes!");
      return;
    }

    const URL = `${process.env.REACT_APP_API_BASE_URL}/user/register`;
    const body = { name, email, password, confirmedPassword, imageUrl };

    const promise = axios.post(URL, body, {});

    promise
      .then((_res) => {
        setIsLoading(false);
        navigate("/");
      })

      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });
  }

  return (
    <DefaultContainer>
      <registerStyle.InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
      </registerStyle.InfoLogo>
      <registerStyle.Forms onSubmit={registerUser}>
        <input
          id="name"
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          disabled={isLoading}
          required
        />
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          disabled={isLoading}
          required
        />
        <input
          id="imageUrl"
          type="url"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder="Image URL"
          disabled={isLoading}
          required
        />
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          disabled={isLoading}
          required
        />
        <input
          id="confirmedPassword"
          type="password"
          onChange={(e) => setConfirmedPassword(e.target.value)}
          value={confirmedPassword}
          placeholder="Confirm Password"
          disabled={isLoading}
          required
        />
        <button id="register" disabled={isLoading}>
          {isLoading ? <Loading /> : "Register"}
        </button>
      </registerStyle.Forms>
      <Link to={"/"}>Already registered? Log now.</Link>
    </DefaultContainer>
  );
}

export default Register;
