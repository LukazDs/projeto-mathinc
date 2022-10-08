import { useState } from "react";
import { CreatePostBox, Form, Logo } from "./createPostStyle";
import logo from "../../assets/images/logo.png";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

function CreatePost({ userId }) {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");

  const { token } = useState(UserContext);
  const tokenDefault = token ? token : localStorage.getItem("token");
  const config = { headers: { Authorization: `${tokenDefault}` } };

  function insertPost() {
    const body = { imageUrl, title, userId };

    const promise = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/posts`,
      body,
      config
    );

    promise
      .then((res) => {
        console.log("Post inserido!");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  return (
    <CreatePostBox>
      <Logo src={logo}></Logo>
      <Form onSubmit={insertPost}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Description..."
          required
        ></input>
        <input
          type="url"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder="ImageUrl..."
          required
        ></input>
        <button>Criar Post</button>
      </Form>
    </CreatePostBox>
  );
}

export default CreatePost;
