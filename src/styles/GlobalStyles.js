import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-dark: #1a1a1a;
    --text-white: #ffffff;
    --text-gray: #888888;
    --neon-green: #00ff88;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-white);
    line-height: 1.5;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neon-green);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00cc6e;
  }
`;

export default GlobalStyles; 