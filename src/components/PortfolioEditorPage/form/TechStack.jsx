import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const LimitBadge = styled.span`
  background-color: #f1f3f5;
  color: #868e96;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 12px 0 0;
  color: #495057;
  font-size: 16px;
`;

const SkillsSection = styled.section`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 48px 14px 16px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #4c6ef5;
    box-shadow: 0 0 0 2px rgba(76, 110, 245, 0.2);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  cursor: pointer;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const SkillTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #f1f3f5;
  color: #495057;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L16.65 16.65" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#495057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#495057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TechStack = forwardRef((props, ref) => {
  const initialSkills = [
    'Adobe Photoshop',
    'Adobe Premiere Pro',
    'Adobe Illustrator',
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [inputValue, setInputValue] = useState('');

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '' && skills.length < 20) {
      e.preventDefault();
      setSkills([...skills, inputValue.trim()]);
      setInputValue('');
    }
  };

  useImperativeHandle(ref, () => ({
    getComponentData: () => {
      return skills;
    }
  }));

  return (
    <SectionContainer>
      <Header>
        <Title>기술 스택</Title>
        <LimitBadge>최대 20개 등록 가능</LimitBadge>
      </Header>
      <Description>
        업무와 관련된 나의 기술·스킬을 소개해보세요.
      </Description>

      <SkillsSection>
        <SectionTitle>나의 기술·스킬</SectionTitle>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="기술·스킬 검색"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
        </InputWrapper>

        <TagContainer>
          {skills.map((skill, index) => (
            <SkillTag key={index}>
              {skill}
              <RemoveButton onClick={() => handleRemoveSkill(index)}>
                <CloseIcon />
              </RemoveButton>
            </SkillTag>
          ))}
        </TagContainer>
      </SkillsSection>
    </SectionContainer>
  );
});

export default TechStack;