import { ResultBox } from "./styleResult";
import { FaStar } from "react-icons/fa";

export default function Result({ points, challenges, setDisplay }) {
  return (
    <ResultBox setDisplay={setDisplay}>
      <span>
        Você acertou {points} de {challenges.length}
      </span>
      <div>
        <Stars challenges={challenges} points={points} />
      </div>
    </ResultBox>
  );
}

function Stars({ challenges, points }) {
  const test = [];

  for (let i = 0; i < points; i++) {
    test.push(<FaStar color="yellow" size={40} />);
  }

  for (let i = 0; i < challenges.length - points; i++) {
    test.push(<FaStar size={34} />);
  }
  return test;
}
