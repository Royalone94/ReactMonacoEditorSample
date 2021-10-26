import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { languageID, themeID } from "../sperta-lang/config";

const Editor: React.FC = () => {
  const [code, setCode] = useState("");

  const onChange = (newValue: string) => {
    setCode(newValue);
  };

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language={languageID}
      theme={themeID}
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editor => editor.focus()}
    />
  );
};

export default Editor;
