import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parse } from '@astrojs/parser';

import { Editor } from './Editor';
import { Parsed } from './Parsed';

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
        setParsedCode(JSON.stringify(newValue, null, 2));
      } catch (error) {
        setParsedCode(error as string);
      }
    };
    parseCode();
  }, [code]);

  return (
    <PlaygroundContainer>
      <Editor code={code} editCode={editCode} />
      <Parsed parsedCode={parsedCode} />
    </PlaygroundContainer>
  );
};

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
`;
