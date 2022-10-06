import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Hearder from "../header/Header";
import Post from "../post/Post";
import { Container, PostsContainer } from "./timelineStyle";

function Timeline() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { token } = useState(UserContext);

  const tokenDefault = token ? token : localStorage.getItem("token");

  useEffect(() => {
    const config = { headers: { Authorization: `${tokenDefault}` } };

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
    return posts.map((v, i) => {
      return (
        <Post key={i} userId={v.userId} title={v.title} imageUrl={v.imageUrl} />
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
