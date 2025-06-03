import styled from "@emotion/styled";

const Item = styled.div`
  flex: 1;
  margin-inline: 40px;
  padding: 30px 40px 32px 40px;
  background-color: #d2d2d2;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const BoardItem = ({ post }) => {
  return (
    <Item>
      <div>
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
        <p style={{ fontSize: "13px", color: "#666" }}>{post.preview}</p>
      </div>
      <div style={{ alignSelf: "center", fontWeight: "500" }}>→</div>
    </Item>
  );
};

export default BoardItem;
