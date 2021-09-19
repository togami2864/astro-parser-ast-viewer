import React from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';

export const Playground: React.FC = () => {
  return (
    <PlaygroundContainer>
      <AceEditor editorProps={{ $blockScrolling: true }} />;
      <textarea readOnly />
    </PlaygroundContainer>
  );
};

const PlaygroundContainer = styled.div`
  display: flex;
`;
