import React from 'react';
import styled from '@emotion/styled';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const SeeMoreLink = styled.a`
  font-size: 12px;
  color: #888;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemPlaceholder = styled.div`
  height: 100px;
  background-color: #e9ecef;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-size: 14px;
`;

function TemplateSection({ title, items }) {
  return (
    <SectionContainer>
      <Header>
        <Title>{title}</Title>
        <SeeMoreLink>더보기</SeeMoreLink>
      </Header>
      <List>
        {items.map((itemText, index) => (
          <ItemPlaceholder key={index}>{itemText}</ItemPlaceholder>
        ))}
      </List>
    </SectionContainer>
  );
}

export default TemplateSection;