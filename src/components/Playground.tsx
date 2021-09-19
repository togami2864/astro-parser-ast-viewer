import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import { parse } from '@astrojs/parser';

export const Playground: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [parsedCode, setParsedCode] = useState<string>('');

  const editCode = (value: string) => {
    setCode(value);
  };

  useEffect(() => {
    const parseCode = async () => {
      try {
        const newValue = parse(code);
        setParsedCode(JSON.stringify(newValue));
      } catch (error) {
        setParsedCode(error as string);
      }
    };
    parseCode();
  }, [code]);

  return (
    <PlaygroundContainer>
      <AceEditor onChange={editCode} editorProps={{ $blockScrolling: true }} />
      <textarea value={parsedCode} readOnly />
    </PlaygroundContainer>
  );
};

const PlaygroundContainer = styled.div`
  display: flex;
`;
