import styled from "styled-components";

const CreatePostBox = styled.div`
  width: 40%;
  height: 120px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  justify-content: space-around;
  input {
    width: 312px;
    height: 25px;
    background: rgba(217, 217, 217, 0.5);
    border: 1px solid #000000;
    border-radius: 16px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 28px;
    padding-left: 6%;
    color: black;

    @media (max-width: 768px) {
      width: 212px;
    }
  }
  button {
    width: 280px;
    height: 26px;
    border: 1px solid #000000;
    border-radius: 16px;
    background: #00bfff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 28px;

    @media (max-width: 768px) {
      width: 180px;
    }
  }
`;

export { CreatePostBox, Logo, Form };
