import { useEffect, useState } from "react";
import axios from "axios";
import { Like } from "../like/Like";

import {
  BottomPost,
  PostBox,
  PostContent,
  PostDescription,
  ProfileTopPost,
  TopPost,
} from "./postStyle";

function Post({ title, imageUrl, userId, postId, isLiked }) {
  const [imageTopPost, setImageTopPost] = useState("");
  const [nameProfileTop, setNameProfileTop] = useState("");

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/user/${userId}`
    );

    promise.then((res) => {
      setImageTopPost(res.data.imageUrl);
      setNameProfileTop(res.data.name);
    });
  }, []);

  return (
    <PostBox>
      <TopPost>
        <ProfileTopPost>
          <img src={imageTopPost} alt="perfil" />
          <span>{nameProfileTop}</span>
        </ProfileTopPost>
      </TopPost>
      <PostDescription>
        <span>{title}</span>
      </PostDescription>

      <PostContent src={imageUrl} alt="post"></PostContent>
      <BottomPost>
        <Like userId={userId} postId={postId} isLiked={isLiked} />
      </BottomPost>
    </PostBox>
  );
}

export default Post;
