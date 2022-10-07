import axios from "axios";
import { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";

function Like({ postId, isLiked }) {
  const [clicked, setClicked] = useState(isLiked);

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
        cursor={"pointer"}
        filter={"brightness(1.75)"}
        onClick={() => {
          setClicked(!clicked);
          realizeDeslike();
        }}
      />
    ) : (
      <AiOutlineHeart
        cursor={"pointer"}
        filter={"brightness(1.75)"}
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
