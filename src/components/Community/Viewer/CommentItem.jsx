const CommentItem = ({ comment }) => {
  return (
    <div style={{ marginLeft: comment.parentId ? 20 : 0, marginTop: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {comment.parentId && (
          <p style={{ color: "#aaa", fontWeight: "lighter" }}>ㄴ</p>
        )}
        <img
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "100px",
            backgroundColor: "white",
          }}
        ></img>
        <p style={{ fontSize: "14px", color: "#888" }}>{comment.author}</p>
      </div>

      <p style={{ fontSize: "15px" }}>{comment.content}</p>
      <p style={{ fontSize: "12px", color: "#aaa" }}>{comment.createdAt}</p>

      {comment.replies?.map((reply) => (
        <CommentItem key={reply.id} comment={reply} />
      ))}
    </div>
  );
};

export default CommentItem;
