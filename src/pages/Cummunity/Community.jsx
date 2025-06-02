import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Cummunity/Sidebar";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import styled from "@emotion/styled";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  margin: 60px 120px 120px 120px;
  gap: 10px;
`;

const Main = styled.main`
  flex: 1;
  padding: 32px;
  overflow-y: auto;
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
