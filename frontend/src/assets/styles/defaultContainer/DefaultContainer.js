import styled from "styled-components";

const DefaultContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f6f6f6;
  position: relative;
  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: black;
    text-decoration: none;
  }
`;

export default DefaultContainer;
