import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Aside = styled.aside`
  width: 100px;
  height: min-content;
  background-color: #f2f2f2;
  padding: 24px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
`;

const SidebarItem = styled(NavLink)`
  padding-bottom: 4px;
  border-bottom: 1px solid #d2d2d2;

  color: #727272;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
    font-weight: bold;
  }
`;

const MatchingItem = styled(NavLink)`
  color: #727272;
  text-decoration: none;
  font-size: 12px;
  width: fit-content;
  &:hover {
    color: #007bff;
  }

  &.active {
    font-weight: bold;
    border-bottom: 1px solid;
  }
`;
const Sidebar = () => {
  return (
    <Aside>
      <SidebarItem to={"all"}>전체</SidebarItem>
      <SidebarItem to={"daily"}>일상</SidebarItem>
      <SidebarItem to={"qa"}>Q&A</SidebarItem>
      <SidebarItem to={"feedback"}>피드백</SidebarItem>
      <SidebarItem to={"matching"} onClick={(e) => e.preventDefault()}>
        팀매칭
      </SidebarItem>
      <MatchingItem to={"matching/study"}>ㄴ스터디</MatchingItem>
      <MatchingItem to={"matching/project"}>ㄴ프로젝트</MatchingItem>
    </Aside>
  );
};

export default Sidebar;
