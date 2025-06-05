import React from 'react';
import styled from '@emotion/styled';

import EditorMainContent from '../../components/PortfolioEditorPage/EditorMainContent';
import EditorLeftSidebar from '../../components/PortfolioEditorPage/EditorLeftSidebar';
import EditorRightSidebar from '../../components/PortfolioEditorPage/EditorRightSidebar';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Noto Sans KR', sans-serif;
`;

function PortfolioEditorPage() {
  return (
    <AppContainer>
      <EditorLeftSidebar />
      <EditorMainContent />
      <EditorRightSidebar />
    </AppContainer>
  );
}

export default PortfolioEditorPage;