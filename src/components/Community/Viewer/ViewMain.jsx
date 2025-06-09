import styled from "@emotion/styled";
import PostComment from "./PostComment";

const Main = styled.main`
  flex: 1;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostTitle = styled.div`
  margin-inline: 40px;
  border-bottom: 1px solid #d2d2d2;
`;

const PostBody = styled.div`
  flex: 1;
  background-color: #d2d2d2;
  min-height: 300px;
  margin-inline: 40px;
  border-bottom: 1px solid #d2d2d2;
`;

const ViewMain = ({ post }) => {
  return (
    <Main>
      <PostTitle>
        <p style={{ fontSize: "14px", color: "#888", display: "flex" }}>
          <img
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "100px",
              backgroundColor: "white",
            }}
          ></img>
          &nbsp;&nbsp;
          {post.author} · {post.createdAt}
        </p>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{post.title}</h3>
        <p style={{ fontSize: "14px", color: "#444" }}>
          {post.tags.join(" | ")}
        </p>
      </PostTitle>
      <PostBody></PostBody>
      <PostComment comments={post.comments} />
    </Main>
  );
};

export default ViewMain;
