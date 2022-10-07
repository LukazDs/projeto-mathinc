import { CreatePostBox, Form, Logo } from "./createPostStyle";
import logo from "../../assets/images/logo.png";

function CreatePost() {
  return (
    <CreatePostBox>
      <Logo src={logo}></Logo>
      <Form>
        <input placeholder="Description..."></input>
        <input placeholder="ImageUrl..."></input>
        <button>Criar Post</button>
      </Form>
    </CreatePostBox>
  );
}

export default CreatePost;
