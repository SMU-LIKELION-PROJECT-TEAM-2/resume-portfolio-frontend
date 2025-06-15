import styled from "@emotion/styled";
import MyPageBanner from "./MyPageBanner";
import UserProfile from "./UserProfile";
import UserCareer from "./UserCareer";
import TabBar from "./TabBar";
import ActiveTable from "./ActiveTable";
import { useState } from "react";

const Main = styled.main`
  display: flex;
  position: relative;
  padding-bottom: 80px;
  gap: 50px;
`;
export const DummyData = [
  { id: 1, type: "work", title: "작업1", tags: ["UXUI"] },
  { id: 2, type: "collection", title: "컬렉션1", tags: ["피드백"] },
  { id: 3, type: "scrap", title: "스크랩1", tags: ["그래픽"] },
  { id: 4, type: "work", title: "작업2", tags: ["UXUI"] },
  { id: 5, type: "collection", title: "컬렉션2", tags: ["피드백"] },
  { id: 6, type: "scrap", title: "스크랩2", tags: ["그래픽"] },
  { id: 7, type: "work", title: "작업3", tags: ["UXUI"] },
  { id: 8, type: "collection", title: "컬렉션3", tags: ["피드백"] },
  { id: 9, type: "scrap", title: "스크랩3", tags: ["그래픽"] },
  { id: 10, type: "work", title: "작업4", tags: ["UXUI"] },
  { id: 11, type: "collection", title: "컬렉션4", tags: ["피드백"] },
  { id: 12, type: "scrap", title: "스크랩4", tags: ["그래픽"] },
];
const MyPageMain = () => {
  const [activeTab, setActiveTab] = useState("work");

  const handleTab = (item) => {
    setActiveTab(item);
  };

  return (
    <Main>
      <MyPageBanner />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <UserProfile />
        <UserCareer />
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "320px",
          width: "60%",
        }}
      >
        <TabBar activeTab={activeTab} handleTab={handleTab} />
        <ActiveTable activeTab={activeTab} />
      </section>
    </Main>
  );
};

export default MyPageMain;
