import { Like } from "../like/Like";
import {
  BottomPost,
  PostBox,
  PostContent,
  ProfileTopPost,
  TopPost,
} from "./postStyle";

function Post() {
  const imageProfile = localStorage.getItem("profileUrl");

  return (
    <PostBox>
      <TopPost>
        <ProfileTopPost>
          <img src={imageProfile} alt="perfil" />
          <span>joão</span>
        </ProfileTopPost>
      </TopPost>
      <PostContent
        src="data:image/png;base64,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"
        alt="post"
      ></PostContent>
      <BottomPost>
        <Like />
      </BottomPost>
    </PostBox>
  );
}

export default Post;
