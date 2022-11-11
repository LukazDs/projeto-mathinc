import { Container, ChalengeBox, Forms, ChalengeTitle } from "./styleChallenge";
import InDevelopment from "../indevelopment/InDevelopment";
import Menu from "../menu/Menu";
import Hearder from "../header/Header";

function Challenge() {
  return (
    <Container>
      <Hearder />
      <ChalengeBox challenge={true}>
        <ChalengeTitle>
          <p>Desafio de Álgebra</p>
          <span>Titulo do desafio</span>
        </ChalengeTitle>
        <Forms>
          <div>
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">HTML</label>
            </div>
            <br />
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">HTML</label>
            </div>
            <br />
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">HTML</label>
            </div>
          </div>
          <button>Confirmar</button>
        </Forms>
      </ChalengeBox>
      <InDevelopment development={false} />
      <Menu />
    </Container>
  );
}

export default Challenge;
