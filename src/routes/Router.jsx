import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import GuidePage from "../pages/GuidePage";
import TemplateList from "../pages/TemplateList";
import PopularPortfolio from "../pages/PopularPortfolio";
import TeamMatching from "../pages/TeamMatching";
import Community from "../pages/Cummunity/Community";
import WritePage from "../pages/WritePage";
import SkillProject from "../pages/SkillProject";
import StudyRecommend from "../pages/StudyRecommend";
import TeamFind from "../pages/TeamFind";
import ProjectRegister from "../pages/ProjectRegister";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage/MyPage";
import Daily from "../pages/Cummunity/Daily";
import Qa from "../pages/Cummunity/Qa";
import Feedback from "../pages/Cummunity/Feedback";
import MatchStudy from "../pages/Cummunity/MatchStudy";
import MatchProject from "../pages/Cummunity/MatchProject";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/guide" element={<GuidePage />} />
      <Route path="/category/templates" element={<TemplateList />} />
      <Route path="/category/portfolio" element={<PopularPortfolio />} />
      <Route path="/category/team" element={<TeamMatching />} />
      <Route path="/community" element={<Community />}>
        <Route path="daily" element={<Daily />} />
        <Route path="qa" element={<Qa />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="matching">
          <Route path="study" element={<MatchStudy />} />
          <Route path="project" element={<MatchProject />} />
        </Route>
      </Route>
      <Route path="/category/write" element={<WritePage />} />
      <Route path="/project/recommend" element={<SkillProject />} />
      <Route path="/project/study" element={<StudyRecommend />} />
      <Route path="/project/find" element={<TeamFind />} />
      <Route path="/project/register" element={<ProjectRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default Router;
