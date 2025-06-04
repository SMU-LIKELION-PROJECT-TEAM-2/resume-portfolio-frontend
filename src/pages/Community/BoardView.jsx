import styled from "@emotion/styled";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import ViewMain from "../../components/Community/Viewer/ViewMain";

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
const BoardView = ({ post }) => {
  const { title } = useOutletContext();
  const nav = useNavigate();
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
      <ViewMain />
    </>
  );
};

export default BoardView;
