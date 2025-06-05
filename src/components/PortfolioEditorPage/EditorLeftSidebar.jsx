import React from 'react';
import styled from '@emotion/styled';
import TemplateSection from './TemplateSection';

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const templateSectionsData = [
  {
    title: '추천 템플릿',
    items: ['추천 템플릿 1', '추천 템플릿 2'],
  },
  {
    title: '인기 포트폴리오 템플릿',
    items: ['인기 포폴 템플릿 1'],
  },
  {
    title: '인기 이력서 템플릿',
    items: ['인기 이력서 템플릿 1'],
  },
];

function EditorLeftSidebar() {
  return (
    <SidebarContainer>
      <SearchInput type="text" placeholder="템플릿 검색" />
      {templateSectionsData.map((section, index) => (
        <TemplateSection key={index} title={section.title} items={section.items} />
      ))}
    </SidebarContainer>
  );
}

export default EditorLeftSidebar;