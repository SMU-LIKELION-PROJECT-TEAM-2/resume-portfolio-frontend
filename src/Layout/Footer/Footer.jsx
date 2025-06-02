import React from 'react';
import './FooterStyles.css'; // CSS 파일을 임포트합니다.

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-placeholder">
          <p>로고</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">개인정보 처리방침</a>
        </div>
        <div className="footer-copyright">
          <p>Copyright ⓒ porfolio. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;