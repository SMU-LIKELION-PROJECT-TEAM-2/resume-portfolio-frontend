import React from 'react';
import styled from '@emotion/styled';

const TabsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.active ? '#333' : '#888')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #333;
    transform: ${props => (props.active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: #333;
  }
`;

const categories = ['개발', '디자인', '기획', '마케팅', '경영/인사', '영업'];

const JobCategoryTabs = ({ activeCategory, onSelectCategory }) => {
  return (
    <TabsContainer>
      {categories.map(category => (
        <TabButton
          key={category}
          active={activeCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default JobCategoryTabs;