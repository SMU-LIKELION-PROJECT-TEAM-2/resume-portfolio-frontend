import React from 'react';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px; 
  min-height: 100vh;
`;

const PageHeader = styled.div`
  background-color: #f8f9fa;
  display: flex;
  margin: 0 auto;
`;

const EditorContainer = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
  align-items: flex-start;
`;

const ContentArea = styled.div`
  flex: 1; // 남은 공간을 모두 차지
`;

const SidebarArea = styled.aside`
  position: sticky;
  top: 40px;
`;

const PortfolioEditorPageLayout = ({ actionBar, headerContent, resumeSections, guide }) => {
  return (
    <PageWrapper>
      <PageHeader>
        {headerContent}
        {actionBar}
      </PageHeader>
      <EditorContainer>
        <ContentArea>
          {resumeSections}
        </ContentArea>
        <SidebarArea>
          {guide}
        </SidebarArea>
      </EditorContainer>
    </PageWrapper>
  );
};

export default PortfolioEditorPageLayout;