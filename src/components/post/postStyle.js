import styled from "styled-components";

const PostBox = styled.div`
  position: relative;
  z-index: 0;
  width: 44%;
  height: 520px;
  margin-bottom: 140px;
  backgroung: green;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopPost = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  background: #1c0101;
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
    margin: 10px;
  }
  span {
    font-family: "Silkscreen", cursive;
    font-size: 12px;
    font-weight: 400;
    color: white;
  }
`;

const PostDescription = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c0101;
  padding: 10px 0px;
  span {
    font-family: "Silkscreen", cursive;
    font-size: 16px;
    padding: 0px 10px;
    font-weight: 400;
    color: white;
    word-break: break-all;
  }
  @media (max-width: 768px) {
    width: 100%;
    span {
      text-align: center;
    }
  }
`;
const PostContent = styled.img`
  width: 90%;
  height: 400px;
  background: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BottomPost = styled.div`
  width: 90%;
  height: 40px;
  background: #1c0101;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 0px 18px;
    text-align: center;
    font-size: 28px;
    color: red;
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
