import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import GuidePage from '../pages/GuidePage';
import TemplateList from '../pages/TemplateList';
import PopularPortfolio from '../pages/PopularPortfolio';
import TeamMatching from '../pages/TeamMatching';
import Community from '../pages/Community';
import WritePage from '../pages/WritePage';
import SkillProject from '../pages/SkillProject';
import StudyRecommend from '../pages/StudyRecommend';
import TeamFind from '../pages/TeamFind';
import ProjectRegister from '../pages/ProjectRegister';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MyPage from '../pages/MyPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/guide" element={<GuidePage />} />
      <Route path="/category/templates" element={<TemplateList />} />
      <Route path="/category/portfolio" element={<PopularPortfolio />} />
      <Route path="/category/team" element={<TeamMatching />} />
      <Route path="/community" element={<Community />} />
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