import CommentItem from "./CommentItem";

const PostComment = ({ comments }) => {
  return (
    <div style={{ padding: "20px 40px" }}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComment;
