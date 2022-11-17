import Menu from "../menu/Menu";
import Hearder from "../header/Header";
import { ChallengesBox } from "./styleChallenge";
import Challenge from "../challenge/Challenge";
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
      {makeChallenges(challenges)}
      <Menu />
    </ChallengesBox>
  );
}

function makeChallenges(challenges) {
  return challenges.map((v, i) => {
    return <Challenge title={v.name} questions={v.challenges} key={i} />;
  });
}

export default Challenges;
