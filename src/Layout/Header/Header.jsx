import React from 'react';
import './HeaderStyles.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="logo">
          <p>로고</p>
        </div>
        <nav className="navigation">
          <a href="#exploration" className="nav-link">탐색</a>
          <a href="#community" className="nav-link">커뮤니티</a>
          <a href="#jobs" className="nav-link">채용</a>
        </nav>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
          <button type="button" className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="header-right">
        <button type="button" className="action-button share-work">내 작업 공유</button>
        <button type="button" className="action-button login">로그인</button>
        <button type="button" className="action-button signup">회원가입</button>
      </div>
    </header>
  );
};

export default Header;