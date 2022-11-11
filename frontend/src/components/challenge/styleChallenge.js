import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//titulo, desafio,  possiveis respostas
const ChalengeBox = styled.div`
  display: ${(props) => (props.challenge ? 'flex' : 'none')};
  flex-direction: column;
  background: green;
  height: 84%;
  width: 84%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 8px solid #8B4513;
  box-sizing: border-box;
`

const ChalengeTitle = styled.div`
  width: 100%;
  height: 20%;
  background: yellow;
`

const Forms = styled.form`
  background: blue;
`

export { Container, ChalengeBox, Forms, ChalengeTitle };
