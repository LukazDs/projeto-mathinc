import axios from "axios";
import { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";

function Like({ userId, postId }) {
  const [clicked, setClicked] = useState(false);
  const { token } = useContext(UserContext);
  const id = localStorage.getItem("id");

  const tokenDefault = token ? token : localStorage.getItem("token");

  const config = { headers: { Authorization: `Bearer ${tokenDefault}` } };

  async function realizeLike() {
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/like?userId=${id}&postId=${postId}`,
      {},
      config
    );
  }

  async function realizeDeslike() {
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/like?userId=${id}&postId=${postId}`,
      config
    );
  }

  function makeLike() {
    return clicked ? (
      <AiFillHeart
        onClick={() => {
          setClicked(!clicked);
          realizeDeslike();
        }}
      />
    ) : (
      <AiOutlineHeart
        onClick={() => {
          setClicked(!clicked);
          realizeLike();
        }}
      />
    );
  }

  return makeLike();
}

export { Like };
