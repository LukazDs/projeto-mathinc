import { Like } from "../like/Like";
import {
  BottomPost,
  PostBox,
  PostContent,
  PostDescription,
  ProfileTopPost,
  TopPost,
} from "./postStyle";

function Post({ title, imageUrl }) {
  const imageProfile = localStorage.getItem("profileUrl");

  return (
    <PostBox>
      <TopPost>
        <ProfileTopPost>
          <img src={imageProfile} alt="perfil" />
          <span>Perfil</span>
        </ProfileTopPost>
        <PostDescription>
          <span>{title}</span>
        </PostDescription>
      </TopPost>

      <PostContent src={imageUrl} alt="post"></PostContent>
      <BottomPost>
        <Like />
      </BottomPost>
    </PostBox>
  );
}

export default Post;
