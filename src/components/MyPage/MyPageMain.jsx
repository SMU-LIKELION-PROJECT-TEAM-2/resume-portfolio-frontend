import styled from "@emotion/styled";
import MyPageBanner from "./MyPageBanner";
import UserProfile from "./UserProfile";
import UserCareer from "./UserCareer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding-bottom: 80px;
`;
const MyPageMain = () => {
  return (
    <Main>
      <MyPageBanner />
      <UserProfile />
      <UserCareer />
    </Main>
  );
};

export default MyPageMain;
