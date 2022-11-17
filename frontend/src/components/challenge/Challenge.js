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
  function handleBackClick() {
    //challengeRef.current.scrollIntoView(true);
    window.scrollBy(0, 500);
  }
  function confirmResponse(event) {
    event.preventDefault();
  }

  return questions.map((v, i) => {
    return (
      <Forms onSubmit={confirmResponse} key={i}>
        <ChalengeTitle>
          <span>{v.title}</span>
        </ChalengeTitle>
        <Questions alternatives={v.alternatives}></Questions>
        <button
          onClick={() => {
            handleBackClick();
          }}
        >
          Confirmar
        </button>
      </Forms>
    );
  });
}

export default Challenge;
