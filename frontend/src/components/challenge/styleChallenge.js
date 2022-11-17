import styled from "styled-components";

//titulo, desafio,  possiveis respostas
const ChalengeBox = styled.div`
  display: ${(props) => (props.challenge ? "flex" : "none")};
  flex-direction: column;
  background: green;
  margin-bottom: 56px;
  height: 74%;
  width: 84%;
  align-items: center;
  border-radius: 24px;
  border: 8px solid #8b4513;
  box-sizing: border-box;
`;

const ChalengeTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-size: 22px;
  color: white;
  p {
    padding: 22px 62px;
    font-weight: 600;
  }

  span {
    font-weight: 500;
    font-size: 20px;
  }
`;

const Forms = styled.form`
  width: 90%;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  color: white;

  label:hover,
  input:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-size: 19px;
    font-weight: 700;
    background: rgb(138, 43, 226);
    color: white;
    width: 128px;
    height: 36px;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    transform: translateX(5px) scale(1.2);
  }
`;

export { ChalengeBox, Forms, ChalengeTitle };
