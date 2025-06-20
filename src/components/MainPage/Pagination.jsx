import React from 'react';
import styled from '@emotion/styled';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding: 20px 0;
`;

const PageButton = styled.button`
  margin: 0 4px;
  min-width: 36px;
  height: 36px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: #f8f9fa;
    border-color: #ced4da;
  }

  /* 현재 페이지일 때 적용될 스타일 */
  &.active {
    background-color: #333;
    color: #fff;
    border-color: #333;
    font-weight: bold;
  }

  /* 비활성화된 버튼 스타일 */
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
    background-color: #f8f9fa;
    &:hover {
      background-color: #f8f9fa;
      border-color: #e0e0e0;
    }
  }
`;

/**
 * 동적 페이지네이션 컴포넌트
 * @param {object} props
 * @param {number} props.totalItems - 전체 아이템 개수
 * @param {number} props.itemsPerPage - 페이지 당 보여줄 아이템 개수
 * @param {number} props.currentPage - 현재 활성화된 페이지 번호
 * @param {function} props.onPageChange - 페이지 번호 변경 시 호출될 함수
 * @param {number} [props.pageGroupSize=10] - 한 번에 보여줄 페이지 번호 그룹 크기
 */
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, pageGroupSize = 10 }) => {
  // 1. 총 페이지 수 계산 (나머지가 있으면 올림 처리)
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // 렌더링할 아이템이 없으면 아무것도 보여주지 않음
  if (totalPages <= 1) return null;

  // 2. 페이지 그룹 관련 계산
  const currentPageGroup = Math.ceil(currentPage / pageGroupSize);
  const lastPageGroup = Math.ceil(totalPages / pageGroupSize);
  
  const startPage = (currentPageGroup - 1) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  // 3. 렌더링할 페이지 번호 배열 생성
  const pagesToRender = [];
  for (let i = startPage; i <= endPage; i++) {
    pagesToRender.push(i);
  }

  return (
    <PaginationContainer>
      {/* 맨 처음 페이지로 가는 버튼 */}
      <PageButton
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </PageButton>
      {/* 이전 페이지로 가는 버튼 */}
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </PageButton>

      {/* 페이지 번호 버튼들 */}
      {pagesToRender.map(page => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </PageButton>
      ))}

      {/* 다음 페이지로 가는 버튼 */}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </PageButton>
      {/* 맨 마지막 페이지로 가는 버튼 */}
      <PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;