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
  position: relative;
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
        {post.tags[0] === "팀매칭_스터디" ||
        post.tags[0] === "팀매칭_프로젝트" ? (
          <p
            style={{
              position: "absolute",
              margin: "0",
              padding: "0",
              right: "0px",
              bottom: "8px",
              width: "221px",
              height: "51px",
              backgroundColor: "#D2D2D2",
              borderRadius: "4px",
              textAlign: "center",
              alignContent: "center",
              fontWeight: "500",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            매칭 제안하기
          </p>
        ) : null}
      </PostTitle>
      <PostBody></PostBody>
      <PostComment comments={post.comments} />
    </Main>
  );
};

export default ViewMain;
