import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    background-color: #f8f9fa;
    color: #212529;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  input, select {
    font-family: inherit;
  }
`;

const GlobalStyles = () => <Global styles={style} />;

export default GlobalStyles;