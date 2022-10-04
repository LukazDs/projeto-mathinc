import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Like() {
  const [clicked, setClicked] = useState(false);

  function makeLike() {
    return clicked ? (
      <AiFillHeart
        onClick={() => {
          setClicked(!clicked);
        }}
      />
    ) : (
      <AiOutlineHeart
        onClick={() => {
          setClicked(!clicked);
        }}
      />
    );
  }

  return makeLike();
}

export { Like };
