import { ChalengeBox, Forms, ChalengeTitle } from "./styleChallenge";
import InDevelopment from "../indevelopment/InDevelopment";
import Questions from "../questions/Questions";
import { useState } from "react";

function Challenge({ title, questions }) {
  const [hits, setHits] = useState(false);
  return (
    <>
      <ChalengeBox challenge={true}>
        <ChalengeTitle>
          <p>Desafio de {title}</p>
        </ChalengeTitle>

        {makeForms(questions, hits, setHits)}
      </ChalengeBox>
      <InDevelopment development={false} />
    </>
  );
}

function makeForms(questions, hits, setHits) {
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
        <Questions
          hits={hits}
          setHits={setHits}
          alternatives={v.alternatives}
        ></Questions>
        <button
          onClick={() => {
            handleBackClick();
            console.log(hits);
          }}
        >
          Confirmar
        </button>
      </Forms>
    );
  });
}

export default Challenge;
