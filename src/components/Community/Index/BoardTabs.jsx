import styled from "@emotion/styled";

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
  background-color: #f2f2f2;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`;

const BoardTabs = () => {
  return (
    <Tabs>
      <TabItems>개발</TabItems>
      <TabItems>디자인</TabItems>
      <TabItems>기획</TabItems>
      <TabItems>마케팅</TabItems>
      <TabItems>경영/인사</TabItems>
      <TabItems>영업</TabItems>
    </Tabs>
  );
};

export default BoardTabs;
