import { Container, ChalengeBox, Forms, ChalengeTitle } from "./styleChallenge";
import InDevelopment from "../indevelopment/InDevelopment";

function Challenge() {
  return (
    <Container>
      <ChalengeBox challenge={true}>
        <ChalengeTitle>
          <p>Desafio de Álgebra</p>
          <span>Titulo do desafio</span>
        </ChalengeTitle>
        <Forms>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">HTML</label>
          <br />
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label for="css">CSS</label>
          <br />
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">JavaScript</label>
        </Forms>
      </ChalengeBox>
      <InDevelopment development={false} />
    </Container>
  );
}

export default Challenge;
