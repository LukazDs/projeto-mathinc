import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../assets/loaders/Loading";
import { registerStyle } from "./registerStyle";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function registerUser(event) {
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
    <registerStyle.Container>
      <registerStyle.InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
      </registerStyle.InfoLogo>
      <registerStyle.Forms onSubmit={registerUser}>
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          required
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="url"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder="Image URL"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        />
        <input
          type="password"
          onChange={(e) => setConfirmedPassword(e.target.value)}
          value={confirmedPassword}
          placeholder="Confirm Password"
          required
        />
        <button disabled={isLoading}>
          {isLoading ? <Loading /> : "Register"}
        </button>
      </registerStyle.Forms>
      <Link to={"/"}>Already registered? Log now.</Link>
    </registerStyle.Container>
  );
}

export default Register;
