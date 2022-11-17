import { ChalengeBox, Forms, ChalengeTitle } from "./styleChallenge";
import InDevelopment from "../indevelopment/InDevelopment";
import Questions from "../questions/Questions";

function Challenge({ title, questions }) {
  return (
    <>
      <ChalengeBox challenge={true}>
        <ChalengeTitle>
          <p>Desafio de {title}</p>
        </ChalengeTitle>

        {makeForms(questions)}
      </ChalengeBox>
      <InDevelopment development={false} />
    </>
  );
}

function makeForms(questions) {
  return questions.map((v, i) => {
    return (
      <Forms key={i}>
        <ChalengeTitle>
          <span>{v.title}</span>
        </ChalengeTitle>
        <Questions alternatives={v.alternatives}></Questions>
        <button>Confirmar</button>
      </Forms>
    );
  });
}

export default Challenge;
