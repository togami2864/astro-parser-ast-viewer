import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <div>
        <p>Astro AST Viewer</p>
      </div>
      <a href="">view on github</a>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 10px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
  border-bottom: 1px solid #f3f4f6;
  color: #f3f4f6;
  div {
    display: flex;
    align-items: center;
  }
  p {
    padding-left: 4px;
  }
`;
