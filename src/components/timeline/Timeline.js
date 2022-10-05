import axios from "axios";
import { useState, useEffect } from "react";
import Hearder from "../header/Header";
import Post from "../post/Post";
import { Container, PostsContainer } from "./timelineStyle";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);

    promise.then((res) => {
      setPosts(res.data);
    });
  }, []);

  function makePosts() {
    return posts.map((v, i) => {
      return <Post key={i} title={v.title} imageUrl={v.imageUrl} />;
    });
  }

  return (
    <Container>
      <Hearder />
      <PostsContainer>{makePosts()}</PostsContainer>
    </Container>
  );
}

export default Timeline;
