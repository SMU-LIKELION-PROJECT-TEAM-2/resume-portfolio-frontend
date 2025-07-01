import React from 'react';
import styled from '@emotion/styled';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  margin-left: 45px;
  max-width: 900px;
  width: 100%;
`;

const TitleLabel = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #212529;
  white-space: nowrap;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: #212529;
  border: none;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    background-color: #f8f9fa;
  }
`;

const ResumeTitleInput = ({ value, onChange }) => {
  return (
    <TitleContainer>
      <TitleLabel>새로운 이력서</TitleLabel>
      <TitleInput
        type="text"
        placeholder="제목을 입력해주세요"
        value={value}
        onChange={onChange}
      />
    </TitleContainer>
  );
};

export default ResumeTitleInput;