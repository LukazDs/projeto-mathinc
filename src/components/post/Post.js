import { Like } from "../like/Like";
import {
  BottomPost,
  PostBox,
  PostContent,
  ProfileTopPost,
  TopPost,
} from "./postStyle";

function Post({ name, imageUrl }) {
  const imageProfile = localStorage.getItem("profileUrl");

  return (
    <PostBox>
      <TopPost>
        <ProfileTopPost>
          <img src={imageProfile} alt="perfil" />
          <span>{name}</span>
        </ProfileTopPost>
      </TopPost>
      <PostContent src={imageUrl} alt="post"></PostContent>
      <BottomPost>
        <Like />
      </BottomPost>
    </PostBox>
  );
}

export default Post;
