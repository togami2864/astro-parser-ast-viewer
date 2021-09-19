import React from 'react';
import AceEditor from 'react-ace';

interface EditorProps {
  code: string;
  editCode: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ code, editCode }) => {
  return (
    <AceEditor
      defaultValue={code}
      width="50vw"
      height="94vh"
      fontSize="16px"
      style={{
        background: '#111827',
      }}
      setOptions={{
        vScrollBarAlwaysVisible: true,
        printMargin: false,
      }}
      onChange={editCode}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
