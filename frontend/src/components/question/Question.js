import { useState } from "react";
import {
  QuestionBox,
  FormBox,
  ChalengeTitle,
  AlternativesBox,
} from "./styleQuestion";
import Alternative from "../alternative/Alternative";

function Question({ title, questions, points, setPoints, clicks, setClicks }) {
  return (
    <QuestionBox>
      <ChalengeTitle>
        <p>Desafio de {title}</p>
      </ChalengeTitle>
      <Form
        questions={questions}
        points={points}
        clicks={clicks}
        setClicks={setClicks}
        setPoints={setPoints}
      />
    </QuestionBox>
  );
}

function Form({ questions, points, setPoints, clicks, setClicks }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  function confirmResponse(event) {
    event.preventDefault();
    window.scrollBy(0, 500);
    setFinished(true);

    if (isCorrect) {
      setPoints(points + 1);
    }
  }

  function Alternatives({ alternatives, setIsCorrect, finished }) {
    return alternatives.map((v, i) => {
      return (
        <Alternative
          status={v.status}
          setIsCorrect={setIsCorrect}
          key={i}
          title={v.title}
          finished={finished}
        />
      );
    });
  }

  return questions.map((v, i) => {
    return (
      <FormBox onSubmit={confirmResponse} key={i}>
        <ChalengeTitle>
          <span>{v.title}</span>
        </ChalengeTitle>
        <AlternativesBox>
          <Alternatives
            alternatives={v.alternatives}
            setIsCorrect={setIsCorrect}
            finished={finished}
          />
        </AlternativesBox>
        <button onClick={() => setClicks(clicks + 1)} disabled={finished}>
          Confirmar
        </button>
      </FormBox>
    );
  });
}

export default Question;
