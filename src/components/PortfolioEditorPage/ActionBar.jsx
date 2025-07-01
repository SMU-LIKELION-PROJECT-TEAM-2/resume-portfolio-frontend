import React from 'react';
import styled from '@emotion/styled';

const BarContainer = styled.div`
  background-color: #f8f9fa;
  padding: 24px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  z-index: 1000;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #dee2e6;
  background-color: #ffffff;
  color: #495057;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    border-color: #ced4da;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #339af0;
  border-color: #339af0;
  color: #ffffff;

  &:hover {
    background-color: #1c7ed6;
    border-color: #1c7ed6;
  }
`;

const ActionBar = ({ onTempSave, onSave, onPdfDownload }) => {
  return (
    <BarContainer>
      <Button onClick={onTempSave}>임시저장</Button>
      <PrimaryButton onClick={onSave}>저장하기</PrimaryButton>
      <Button onClick={onPdfDownload}>PDF 다운로드</Button>
    </BarContainer>
  );
};

export default ActionBar;