import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled.div`
  height: 80px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #d2d2d2;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: large;
`;

const BoardHeader = ({ title }) => {
  return (
    <Header>
      <p>{title}</p>
      <NavLink
        to="/community/write"
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        글쓰기
      </NavLink>
    </Header>
  );
};

export default BoardHeader;
