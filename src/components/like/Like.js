import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";

function Like({ postId, isLiked }) {
  const [clicked, setClicked] = useState(isLiked);
  const [amountLikes, setAmountLikes] = useState(0);

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

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/likes/post/${postId}/amount`
    );

    promise.then((res) => {
      setAmountLikes(res.data.amount);
    });
  }, []);

  function makeLike() {
    return clicked ? (
      <AiFillHeart
        cursor={"pointer"}
        filter={"brightness(1.75)"}
        onClick={() => {
          setClicked(!clicked);
          realizeDeslike();
          setAmountLikes(amountLikes - 1);
        }}
      />
    ) : (
      <AiOutlineHeart
        cursor={"pointer"}
        filter={"brightness(1.75)"}
        onClick={() => {
          setClicked(!clicked);
          realizeLike();
          setAmountLikes(amountLikes + 1);
        }}
      />
    );
  }

  return (
    <div>
      <span>{amountLikes} Likes</span>
      {makeLike()}
    </div>
  );
}

export { Like };
