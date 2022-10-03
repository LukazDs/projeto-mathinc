import styled from "styled-components";

const PostBox = styled.div`
  position: relative;
  z-index: 0;
  width: 80%;
  height: 450px;
  background: gray;
  margin-top: 90px;
  border-radius: 10px 10px 0px 0px;
`;

const TopPost = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;

  background: #1c0101;
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
    font-size: 15px;
    font-weight: 400;
    color: white;
  }
`;

const PostContent = styled.img`
  width: 100%;
  height: 76%;
  background: #ffffff;
  object-fit: cover;
`;

export { PostBox, TopPost, ProfileTopPost, PostContent };
