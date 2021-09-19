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
  border-color: white;
  &:focus {
    border-color: white;
    background-color: white;
    outline: none;
  }
`;
