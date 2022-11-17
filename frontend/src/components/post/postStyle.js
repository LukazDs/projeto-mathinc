import styled from "styled-components";

const PostBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  width: 44%;
  height: 100%;
  margin-bottom: 40px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 5px 5px 5px rgba(27, 27, 27, 255);
  background: #050514;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopPost = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileTopPost = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    text-align: center;
    background: white;
    border-radius: 20px;
    margin: 0px 10px;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
  }
`;

const PostDescription = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding: 0px 18px;
    font-weight: 400;
    color: white;
    word-break: break-word;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PostContent = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BottomPost = styled.div`
  width: 100%;
  height: 54px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      margin: 0px 18px;
      text-align: center;
      font-size: 24px;
      color: red;
    }
    span {
      font-family: "Roboto";
      font-size: 10px;
      font-weight: 600;
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  PostBox,
  TopPost,
  PostDescription,
  ProfileTopPost,
  PostContent,
  BottomPost,
};
