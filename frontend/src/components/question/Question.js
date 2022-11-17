import { QuestionBox } from "./styleQuestion";

function Question({ title }) {
  return (
    <QuestionBox>
      <input type="radio" id={title} name="fav_language" value={title} />
      <label for={title}>{title}</label>
    </QuestionBox>
  );
}

export default Question;
