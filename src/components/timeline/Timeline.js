import Hearder from "../header/Header";
import Post from "../post/Post";
import { Container, PostsContainer } from "./timelineStyle";

function Timeline() {
  return (
    <Container>
      <Hearder />
      <PostsContainer>
        <Post />
        <Post />
      </PostsContainer>
    </Container>
  );
}

export default Timeline;
