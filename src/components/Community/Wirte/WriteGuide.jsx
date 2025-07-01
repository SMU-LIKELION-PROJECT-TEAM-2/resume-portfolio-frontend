import styled from "@emotion/styled";

const GuideItem = styled.div`
  height: 360px;
  background-color: #ffffff;
  margin: 24px;
  border-radius: 6px;
`;

const WriteGuide = () => {
  return (
    <>
      <GuideItem>guide1</GuideItem>
      <GuideItem>guide2</GuideItem>
      <GuideItem>guide3</GuideItem>
    </>
  );
};

export default WriteGuide;
