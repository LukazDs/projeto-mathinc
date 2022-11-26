import { useState } from "react";
import {
  QuestionBox,
  FormBox,
  ChalengeTitle,
  AlternativesBox,
  Point,
} from "./styleQuestion";
import Alternative from "../alternative/Alternative";

function Question({ title, questions, points, setPoints }) {
  return (
    <QuestionBox>
      <ChalengeTitle>
        <p>Desafio de {title}</p>
      </ChalengeTitle>
      <Form questions={questions} points={points} setPoints={setPoints} />
      <Point>{points}</Point>
    </QuestionBox>
  );
}

function Form({ questions, points, setPoints }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  function confirmResponse(event) {
    event.preventDefault();
    window.scrollBy(0, 500);
    setFinished(true);

    if (isCorrect) {
      setPoints(points + 10);
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
        <button disabled={finished}>Confirmar</button>
      </FormBox>
    );
  });
}

export default Question;
