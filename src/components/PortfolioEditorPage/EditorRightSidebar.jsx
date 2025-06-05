import React from 'react';
import styled from '@emotion/styled';
import GuideListItem from './GuideListItem';

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #ffffff;
  padding: 20px;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

const GuideHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const GuideModeToggle = styled.span`
  font-size: 14px;
  color: #555;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;

  &.active {
    background-color: #e9ecef;
    font-weight: bold;
  }
`;

const GuideTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

const GuideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const guideItemsData = [
  { id: 'basic', text: '기본 정보' },
  { id: 'skills', text: '기술·스펙' },
  { id: 'experience', text: '경력' },
  { id: 'projects', text: '프로젝트' },
  { id: 'portfolio', text: '포트폴리오' },
  { id: 'education', text: '교육' },
  { id: 'activities', text: '대외활동' },
  { id: 'certificates', text: '자격증' },
  { id: 'languages', text: '외국어' },
  { id: 'selfIntro', text: '자기소개' },
];

function EditorRightSidebar() {
  const activeMode = 'resume';

  return (
    <SidebarContainer>
      <GuideHeader>
        <GuideModeToggle className={activeMode === 'resume' ? 'active' : ''}>
          이력서
        </GuideModeToggle>
        <GuideModeToggle className={activeMode === 'portfolio' ? 'active' : ''}>
          포트폴리오
        </GuideModeToggle>
      </GuideHeader>
      <GuideTitle>작성 가이드</GuideTitle>
      <GuideList>
        {guideItemsData.map(item => (
          <GuideListItem key={item.id} text={item.text} />
        ))}
      </GuideList>
    </SidebarContainer>
  );
}

export default EditorRightSidebar;