import { monaco } from "react-monaco-editor";

export const SpertaTheme = <monaco.editor.IStandaloneThemeData>{
  base: "vs",
  inherit: true,
  rules: [
    { token: "keyword", foreground: "#0000ff", fontStyle: "bold" },
    { token: "type", foreground: "#ff00ff", fontStyle: "bold" },
    { token: "string", foreground: "#208a17", fontStyle: "bold" },
    { token: "comment", foreground: "#bfbfbf", fontStyle: "bold" },
    { token: "number", foreground: "#00007f", fontStyle: "bold" },
    { token: "operator", foreground: "#ff00ff", fontStyle: "bold" },
    { token: "function", foreground: "#8f0000", fontStyle: "bold" },
    { token: "predefined", foreground: "#004080", fontStyle: "bold" },
  ],
  colors: {
    "editor.foreground": "#000000",
    "editor.background": "#EDF9FA",
    "editorCursor.foreground": "#8B0000",
    "editor.lineHighlightBackground": "#0000FF20",
    "editorLineNumber.foreground": "#008800",
    "editor.selectionBackground": "#88000030",
    "editor.inactiveSelectionBackground": "#88000015",
  },
};
