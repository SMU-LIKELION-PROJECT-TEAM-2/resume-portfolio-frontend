import React from 'react';
import styled from '@emotion/styled';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }

  &.arrow {
    font-weight: bold;
  }
`;

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageButton key={page} className={page === 1 ? 'active' : ''}>
          {page}
        </PageButton>
      ))}
      <PageButton className="arrow">→</PageButton>
    </PaginationContainer>
  );
};

export default Pagination;