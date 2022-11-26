import { AlternativeBox } from "./styleAlternative";

function Alternative({ title, status, setIsCorrect, finished }) {
  return (
    <AlternativeBox
      onClick={() => {
        setIsCorrect(status);
      }}
    >
      <input
        disabled={finished}
        type="radio"
        id={title}
        name="fav_language"
        value={title}
      />
      <label htmlFor={title}>{title}</label>
    </AlternativeBox>
  );
}

export default Alternative;
