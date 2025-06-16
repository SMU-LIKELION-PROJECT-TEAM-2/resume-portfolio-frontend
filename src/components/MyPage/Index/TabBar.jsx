import styled from "@emotion/styled";
import { useState } from "react";

const TabButton = styled.p`
  height: 44px;
  width: 110px;
  margin-block: 0px 10px;
  text-align: center;
  align-content: center;
  background-color: ${({ active }) => (active ? "#979797" : "#e8e8e8")};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
`;

const TabBar = ({ activeTab, handleTab }) => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        borderBottom: "1px solid #D2D2D2",
        alignItems: "center",
      }}
    >
      <TabButton
        active={activeTab === "work"}
        onClick={() => handleTab("work")}
      >
        작업
      </TabButton>
      <TabButton
        active={activeTab === "collection"}
        onClick={() => handleTab("collection")}
      >
        컬렉션
      </TabButton>
      <p
        style={{
          border: "1px solid #CDCDCD",
          height: "36px",
          margin: "0 10px 10px 10px",
        }}
      ></p>
      <TabButton
        active={activeTab === "scrap"}
        onClick={() => handleTab("scrap")}
      >
        스크랩
      </TabButton>
    </nav>
  );
};

export default TabBar;
