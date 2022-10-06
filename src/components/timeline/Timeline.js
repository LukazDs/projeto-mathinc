import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Hearder from "../header/Header";
import Post from "../post/Post";
import { Container, PostsContainer } from "./timelineStyle";

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();
  const { token } = useState(UserContext);
  const id = localStorage.getItem("id");

  const tokenDefault = token ? token : localStorage.getItem("token");
  const config = { headers: { Authorization: `${tokenDefault}` } };

  // get user likes
  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/likes/user/${id}`,
      config
    );

    promise.then((res) => {
      setLikes(res.data);
    });
  }, []);

  //get posts
  useEffect(() => {
    if (!tokenDefault) navigate("/");

    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/posts`,
      config
    );

    promise
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
        localStorage.clear();
        navigate("/");
      });
  }, []);

  function makePosts() {
    return posts.map((post, i) => {
      return (
        <Post
          key={i}
          userId={post.userId}
          postId={post.id}
          title={post.title}
          imageUrl={post.imageUrl}
          isLiked={likes.some((v) => v.postId === post.id)}
        />
      );
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
