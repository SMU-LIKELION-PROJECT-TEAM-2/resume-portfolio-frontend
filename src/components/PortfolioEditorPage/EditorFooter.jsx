import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  padding: 20px 30px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddPageButton = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5a6268;
  }
`;

function EditorFooter() {
  return (
    <FooterContainer>
      <AddPageButton>페이지 추가</AddPageButton>
    </FooterContainer>
  );
}

export default EditorFooter;