import React from 'react';
import styled from '@emotion/styled';
import { Eye, EyeOff } from 'lucide-react';

const GuideContainer = styled.div`
  width: 280px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  height: fit-content;
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 20px 0;
`;

const GuideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GuideItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: #333;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const RequiredLabel = styled.span`
  font-size: 0.75rem;
  color: #ff5252;
  font-weight: 700;
  margin-left: 6px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Guide = ({ sections, visibleSections, onToggle }) => {
  return (
    <GuideContainer>
      <Title>작성 가이드</Title>
      <GuideList>
        {sections.map(section => (
          <GuideItem key={section.id}>
            <div>
              <span>{section.name}</span>
              {section.isRequired && <RequiredLabel>필수</RequiredLabel>}
            </div>
            <ToggleButton
              onClick={() => onToggle(section.id)}
              disabled={section.isRequired}
              aria-label={`${section.name} 섹션 보이기/숨기기`}
            >
              {visibleSections[section.id] ? (
                <Eye size={18} color="#555" />
              ) : (
                <EyeOff size={18} color="#aaa" />
              )}
            </ToggleButton>
          </GuideItem>
        ))}
      </GuideList>
    </GuideContainer>
  );
};

export default Guide;