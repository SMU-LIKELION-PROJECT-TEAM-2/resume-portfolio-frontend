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
import OAuthCallbackKakao from '../pages/OAuthCallbackKakao';
import OAuthCallbackGoogle from '../pages/OAuthCallbackGoogle';
import Onboarding from '../pages/Onboarding';
import SignUpSuccess from '../pages/SignUpSuccess';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/onboarding" element={<Onboarding />} />
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
      <Route path="/signup/success" element={<SignUpSuccess />} />
      <Route path="/mypage" element={<MyPage />} />
      {/* 소셜 로그인 콜백 경로 추가 */}
      <Route path="/oauth/callback/kakao" element={<OAuthCallbackKakao />} />
      <Route path="/oauth/callback/google" element={<OAuthCallbackGoogle />} />
    </Routes>
  );
}

export default Router;