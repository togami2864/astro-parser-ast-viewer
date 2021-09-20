import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parse } from '@astrojs/parser';

import { initialEditorValue } from '../assets/constants';
import { Header } from './Header';
import { Editor } from './Editor';
import { Parsed } from './Parsed';

import { readHash, updateHash } from '../lib/hash';

export const Playground: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [parsedCode, setParsedCode] = useState<string>('');

  const editCode = (value: string) => {
    setCode(value);
  };

  useEffect(() => {
    const { source } = readHash();
    if (source) {
      setCode(source);
    } else {
      setCode(initialEditorValue);
    }
  }, []);

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

  useEffect(() => {
    updateHash({ source: code });
  }, [code]);

  return (
    <>
      <Header />
      <PlaygroundContainer>
        <Editor code={code} editCode={editCode} />
        <Parsed parsedCode={parsedCode} />
      </PlaygroundContainer>
    </>
  );
};

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  color: #f3f4f6;
  .ace_gutter {
    background: #ff5e00;
  }
  .ace_gutter-cell.ace_gutter-active-line {
    background: #ff5e00;
    color: #f3f4f6;
  }
  .ace-tm {
    color: #f3f4f6;
  }
  .ace-tm .ace_cursor {
    color: #f3f4f6;
  }
  .ace_hidden-cursors .ace_cursor {
    opacity: 0.7;
  }
`;
