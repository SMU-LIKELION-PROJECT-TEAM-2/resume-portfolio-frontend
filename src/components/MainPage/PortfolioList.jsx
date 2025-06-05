import React from 'react';
import styled from '@emotion/styled';
import PortfolioItem from './PortfolioItem';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioList = ({ items, type }) => {
  if (!items || items.length === 0) {
    return <p style={{ textAlign: 'center', margin: '40px 0' }}>표시할 아이템이 없습니다.</p>;
  }
  return (
    <ListContainer>
      {items.map(item => (
        <PortfolioItem key={item.id} item={item} type={type} />
      ))}
    </ListContainer>
  );
};

export default PortfolioList;