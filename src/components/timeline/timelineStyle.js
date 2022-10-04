import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff2f2;
  position: relative;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

export { Container, PostsContainer };
