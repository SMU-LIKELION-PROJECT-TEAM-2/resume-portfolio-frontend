import styled from "@emotion/styled";
import { usePostStore } from "../../../stores/usePostStore";

const Tabs = styled.nav`
  display: flex;
  width: auto;
  margin-inline: 40px;
  margin-block: 20px;
  padding-inline: 12px;
  padding-block: 4px;
  background-color: #d2d2d2;
  border-radius: 4px;
  gap: 5px;
`;

const TabItems = styled.p`
  flex: 1;
  margin: 2px;
  padding-block: 10px;
  background-color: ${({ active }) => (active ? "#ffffff" : "#f2f2f2")};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${({ active }) => (active ? "#007bff" : "#444")};
`;

const BoardTabs = () => {
  const selectedTag = usePostStore((state) => state.selectedTag);
  const setSelectedTag = usePostStore((state) => state.setSelectedTag);

  const handleClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Tabs>
      <TabItems onClick={() => handleClick(null)} active={selectedTag === null}>
        전체
      </TabItems>
      {["개발", "디자인", "기획", "마케팅", "경영/인사", "영업"].map((tag) => (
        <TabItems
          key={tag}
          onClick={() => handleClick(tag)}
          active={selectedTag === tag}
        >
          {tag}
        </TabItems>
      ))}
    </Tabs>
  );
};

export default BoardTabs;
