import styled from "styled-components";

const CreatePostBox = styled.div`
  width: 40%;
  height: 190px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px;
  border-radius: 25px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const Form = styled.form`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    width: 312px;
    height: 38px;
    background: rgba(217, 217, 217, 0.5);
    border: 2px solid #000000;
    border-radius: 16px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    padding-left: 6%;
    color: black;

    @media (max-width: 768px) {
      width: 212px;
    }
  }
  button {
    width: 180px;
    height: 32px;
    border: 2px solid #4B0082;
    border-radius: 16px;
    background: rgb(138,43,226);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: white;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 180px;
    }
  }
`;

export { CreatePostBox, Logo, Form };
