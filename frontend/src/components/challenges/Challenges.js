import Menu from "../menu/Menu";
import Hearder from "../header/Header";
import { ChallengesBox } from "./styleChallenges";
import Question from "../question/Question";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_BASE_URL}/disciplines`;
    const promise = axios.get(URL);

    promise.then((res) => setChallenges(res.data));
  }, []);

  return (
    <ChallengesBox>
      <Hearder />
      <Questions challenges={challenges} />
      <Menu />
    </ChallengesBox>
  );
}

function Questions({ challenges }) {
  const [points, setPoints] = useState(0);

  return challenges.map((v, i) => {
    return (
      <Question
        title={v.name}
        points={points}
        setPoints={setPoints}
        questions={v.challenges}
        key={i}
      />
    );
  });
}

export default Challenges;
