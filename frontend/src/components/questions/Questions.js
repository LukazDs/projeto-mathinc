import { useState } from "react";
import Question from "../question/Question";
import { QuestionsBox } from "./styleQuestions";

function Questions({ alternatives, hits, setHits }) {
  return (
    <QuestionsBox>{makeQuestions(alternatives, hits, setHits)}</QuestionsBox>
  );
}

function makeQuestions(alternatives, hits, setHits) {
  return alternatives.map((v, i) => {
    return (
      <Question
        hits={hits}
        status={v.status}
        setHits={setHits}
        key={i}
        title={v.title}
      />
    );
  });
}

export default Questions;
