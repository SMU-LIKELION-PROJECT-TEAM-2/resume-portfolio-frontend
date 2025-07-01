import styled from "@emotion/styled";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import CareerEdit from "../../components/MyPage/Edit/CareerEdit";
import DocumentEdit from "../../components/MyPage/Edit/DocumentEdit";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding-block: 50px;
`;

const ProfileEdit = () => {
  return (
    <>
      <Main>
        <DocumentEdit />
        <CareerEdit />
      </Main>
    </>
  );
};

export default ProfileEdit;
