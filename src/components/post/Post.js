import { PostBox, ProfileTopPost, TopPost } from "./postStyle";

function Post() {
  return (
    <PostBox>
      <TopPost>
        <ProfileTopPost>
          <img
            src="data:image/jpeg;base64,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"
            alt="perfil"
          />
          <span>joão</span>
        </ProfileTopPost>
      </TopPost>
    </PostBox>
  );
}

export default Post;
