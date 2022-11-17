import Question from "../question/Question";
import { QuestionsBox } from "./styleQuestions";

function Questions({ alternatives }) {
  return <QuestionsBox>{makeQuestions(alternatives)}</QuestionsBox>;
}

function makeQuestions(alternatives) {
  return alternatives.map((v, i) => {
    return <Question key={i} title={v.title} />;
  });
}

export default Questions;
