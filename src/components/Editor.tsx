import React from 'react';
import AceEditor from 'react-ace';
// import styled from 'styled-components';

interface EditorProps {
  code: string;
  editCode: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ code, editCode }) => {
  return (
    <AceEditor
      defaultValue={code}
      style={{ width: '50%' }}
      onChange={editCode}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
