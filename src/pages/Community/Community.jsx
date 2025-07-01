import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Community/Index/Sidebar";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { usePostStore } from "../../stores/usePostStore";

const dummyPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  author: `사용자이름`,
  createdAt: `${19 - (i % 5)}시간 전`,
  title: `이곳은 제목이 들어갈 자리입니다.`,
  tags: ["일상", "개발"],
  preview: `이 게시글 본문에 작성된 첫 번째 문단을 노출합니다. 최대 길이는 1 line으로 0000px입니다.`,
  comments: [
    {
      id: 1,
      author: "사용자이름",
      content: "이곳은 댓글의 본문이 들어가는 자리입니다.",
      createdAt: "19시간 전",
      parentId: null,
      replies: [
        {
          id: 2,
          author: "사용자이름",
          content: "이곳은 대댓글 본문입니다.",
          createdAt: "19시간 전",
          parentId: 1,
          replies: [],
        },
      ],
    },
  ],
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
  const setPosts = usePostStore((state) => state.setPosts);

  useEffect(() => {
    setPosts(dummyPosts);
  }, []);

  const location = useLocation();
  const setSelectedBoard = usePostStore((state) => state.setSelectedBoard);

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("/all")) setSelectedBoard(null); // 전체
    else if (path.includes("/daily")) setSelectedBoard("일상");
    else if (path.includes("/qa")) setSelectedBoard("Q&A");
    else if (path.includes("/feedback")) setSelectedBoard("피드백");
    else if (path.includes("/matching/study")) setSelectedBoard("스터디");
    else if (path.includes("/matching/project")) setSelectedBoard("프로젝트");
    else if (path.includes("/matching")) setSelectedBoard("팀매칭");
    else setSelectedBoard(null); // 기본값
  }, [location.pathname]);
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Layout>
    </>
  );
};
export default Community;
