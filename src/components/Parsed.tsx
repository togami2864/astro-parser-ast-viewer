import React from 'react';
import styled from 'styled-components';

interface ParsedProps {
  parsedCode: string;
}

export const Parsed: React.FC<ParsedProps> = ({ parsedCode }) => {
  return <TextArea value={parsedCode} readOnly style={{ width: '50%' }} />;
};

const TextArea = styled.textarea`
  width: 50%;
  height: 94vh;
  border-color: #111827;
  background: #111827;
  color: #f3f4f6;
  overflow-y: scroll;
  font-size: 16px;
  &:focus {
    border-color: #111827;
    background-color: #111827;
    outline: none;
  }
`;
