import styled from "styled-components";

const ResultBox = styled.div`
  background-color: green;
  width: 75%;
  height: 100px;
  display: ${(props) => (props.setDisplay ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
  }
`;

export { ResultBox };
