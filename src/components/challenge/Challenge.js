import { Container, Logo } from "./styleChallenge";
import logo_challenge from "../../assets/images/logo_challenge.jpeg";
import { useNavigate } from "react-router-dom";

function Challenge() {
  const navigate = useNavigate();
  return (
    <Container>
      <span>Sorry page under development!</span>
      <Logo src={logo_challenge} />
      <button onClick={() => navigate("/posts")}>Voltar</button>
    </Container>
  );
}

export default Challenge;
