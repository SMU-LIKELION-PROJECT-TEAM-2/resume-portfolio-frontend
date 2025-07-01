import styled from "@emotion/styled";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import ViewMain from "../../components/Community/Viewer/ViewMain";
import { dummyPosts } from "./Community";

const Header = styled.header`
  height: 80px;
  background-color: #d2d2d2;
  display: flex;
  align-items: center;
  padding-inline: 40px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const BoardView = () => {
  const { id } = useParams();
  const { title } = useOutletContext();
  const nav = useNavigate();

  const post = dummyPosts.find((p) => p.id === Number(id));

  if (!post)
    return <p style={{ padding: "40px" }}>존재하지 않는 게시글입니다.</p>;

  return (
    <>
      <Header>
        <p
          onClick={() => nav(-1)}
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          ←
        </p>
        {title}
      </Header>
      <ViewMain post={post} />
    </>
  );
};

export default BoardView;
