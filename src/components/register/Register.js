import { useState } from "react";
import { Link } from "react-router-dom";
import { registerStyle } from "./registerStyle";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <registerStyle.Container>
      <registerStyle.InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
      </registerStyle.InfoLogo>
      <registerStyle.Forms>
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
        <button>Login</button>
      </registerStyle.Forms>
      <Link to={"/"}>Already registered? Log now.</Link>
    </registerStyle.Container>
  );
}

export default Register;
