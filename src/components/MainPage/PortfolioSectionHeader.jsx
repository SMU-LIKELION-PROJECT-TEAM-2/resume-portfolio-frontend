import React from 'react';
import styled from '@emotion/styled';

const SectionHeaderContainer = styled.div`
  padding: 40px 0 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #212529;
  margin: 0;
`;

const PortfolioSectionHeader = () => {
  return (
    <SectionHeaderContainer>
      <Title>인기 포트폴리오</Title>
    </SectionHeaderContainer>
  );
};

export default PortfolioSectionHeader;