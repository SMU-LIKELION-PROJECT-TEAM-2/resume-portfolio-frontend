import styled from "@emotion/styled";
import { useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import WriteMain from "../../components/Community/Wirte/WriteMain";
import WriteGuide from "../../components/Community/Wirte/WriteGuide";
import { NavLink } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding-inline: 20px;
  justify-content: space-between;
  z-index: 1;
`;

const NavItem = styled(NavLink)`
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  text-decoration: none;
`;

const GuideOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 410px;
  background-color: #f7f7f7;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const GuideOverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: #d2d2d2;
  height: 60px;
  padding-inline: 20px;
`;

const BoardWrite = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <PageWrapper>
      <Header>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <img
            alt="로고"
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "#ffffff",
            }}
          />
          <NavItem>탐색</NavItem>
          <NavItem to={"/community/all"}>커뮤니티</NavItem>
          <NavItem>채용</NavItem>
        </div>
        <NavItem onClick={() => setIsGuideOpen(true)}>작성가이드</NavItem>
      </Header>
      <WriteMain />
      <GuideOverlay open={isGuideOpen}>
        <GuideOverlayHeader>
          <p>작성가이드</p>
          <p
            onClick={() => setIsGuideOpen(false)}
            style={{ cursor: "pointer" }}
          >
            X
          </p>
        </GuideOverlayHeader>
        <WriteGuide />
      </GuideOverlay>

      <Footer />
    </PageWrapper>
  );
};

export default BoardWrite;
