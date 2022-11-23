import { QuestionBox } from "./styleQuestion";

function Question({ title, setHits, status }) {
  return (
    <QuestionBox>
      <input
        type="radio"
        id={title}
        name="fav_language"
        value={title}
        onClick={() => {
          setHits(status);
        }}
      />
      <label for={title}>{title}</label>
    </QuestionBox>
  );
}

export default Question;
