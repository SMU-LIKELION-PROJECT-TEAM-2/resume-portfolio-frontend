import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Community/Sidebar";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import styled from "@emotion/styled";

export const dummyPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  author: `사용자이름`,
  createdAt: `${19 - (i % 5)}시간 전`,
  title: `이곳은 제목이 들어갈 자리입니다.`,
  tags: ["게시판 태그", "분야 태그"],
  preview: `이 게시글 본문에 작성된 첫 번째 문단을 노출합니다. 최대 길이는 1 line으로 0000px입니다.`,
}));

const Layout = styled.div`
  height: auto;
  display: flex;
  margin: 60px 240px 120px 140px;
  gap: 10px;
`;

const Main = styled.main`
  flex: 1;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const Community = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Layout>
      <Footer />
    </>
  );
};
export default Community;
