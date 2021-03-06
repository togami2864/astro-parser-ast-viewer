import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <div>
        <p>Astro AST Viewer</p>
      </div>
      <a
        href="https://github.com/togami2864/astro-parser-ast-viewer"
        target="_blank"
        rel="noreferrer"
      >
        view on github
      </a>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 10px;
  width: 100%;
  height: 8vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
  border-bottom: 3px solid #ff5e00;
  color: #f3f4f6;
  div {
    display: flex;
    align-items: center;
  }
  p {
    padding-left: 4px;
  }
`;
