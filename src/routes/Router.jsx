import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import About from "../pages/About";
import GuidePage from "../pages/GuidePage";
import TemplateList from "../pages/TemplateList";
import PopularPortfolio from "../pages/PopularPortfolio";
import TeamMatching from "../pages/TeamMatching";
import Community from "../pages/Community/Community";
import JobsPage from '../pages/JobsPage/JobsPage';
import PortfolioEditorPage from "../pages/PortfolioEditorPage/PortfolioEditorPage";
import SkillProject from "../pages/SkillProject";
import StudyRecommend from "../pages/StudyRecommend";
import TeamFind from "../pages/TeamFind";
import ProjectRegister from "../pages/ProjectRegister";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage/MyPage";
import Daily from "../pages/Community/Daily";
import Qa from "../pages/Community/Qa";
import Feedback from "../pages/Community/Feedback";
import MatchStudy from "../pages/Community/MatchStudy";
import MatchProject from "../pages/Community/MatchProject";
import AllBoard from "../pages/Community/AllBoard";
import BoardWrite from "../pages/Community/BoardWrite";
import BoardView from "../pages/Community/BoardView";
import ProfileEdit from "../pages/MyPage/ProfileEdit";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/guide" element={<GuidePage />} />
      <Route path="/category/templates" element={<TemplateList />} />
      <Route path="/category/portfolio" element={<PopularPortfolio />} />
      <Route path="/category/team" element={<TeamMatching />} />
      <Route path="/community" element={<Community />}>
        <Route path="all" element={<AllBoard />}>
          <Route path="view/:id" element={<BoardView />} />
        </Route>
        <Route path="daily" element={<Daily />}>
          <Route path="view/:id" element={<BoardView />} />
        </Route>
        <Route path="qa" element={<Qa />}>
          <Route path="view/:id" element={<BoardView />} />
        </Route>
        <Route path="feedback" element={<Feedback />}>
          <Route path="view/:id" element={<BoardView />} />
        </Route>
        <Route path="matching">
          <Route path="study" element={<MatchStudy />}>
            <Route path="view/:id" element={<BoardView />} />
          </Route>
          <Route path="project" element={<MatchProject />}>
            <Route path="view/:id" element={<BoardView />} />
          </Route>
        </Route>
      </Route>
      <Route path="/community/write" element={<BoardWrite />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/editor" element={<PortfolioEditorPage />} />
      <Route path="/project/recommend" element={<SkillProject />} />
      <Route path="/project/study" element={<StudyRecommend />} />
      <Route path="/project/find" element={<TeamFind />} />
      <Route path="/project/register" element={<ProjectRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/edit" element={<ProfileEdit />} />
    </Routes>
  );
}

export default Router;
