import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from '@emotion/styled';

const ContentWrapper = styled.main`
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        {children} 
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default Layout;