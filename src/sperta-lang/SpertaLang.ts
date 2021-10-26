/* eslint-disable @typescript-eslint/no-explicit-any */
import { monaco } from "react-monaco-editor";
// eslint-disable-next-line import/extensions
import model from "./model.json";

export const configuration: monaco.languages.LanguageConfiguration = {
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] },
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
};

export const monarchLanguage = <monaco.languages.IMonarchLanguage>{
  defaultToken: "invaild",
  tokenPostfix: ".sperta",

  keywords: ["false", "true", "int", "double", "string", "timestamp", "bool"],
  operators: [
    ">",
    "<",
    "not",
    "?",
    ":",
    "==",
    "<=",
    ">=",
    "!=",
    "and",
    "or",
    "in",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ],
  functions: ["has", "all", "exists", "exists_one", "map", "filter"],
  namespaces: [],

  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
  ],

  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@operators" },

      [/(\w*\.)(true)/, "predefined"],
      [/(\w*\.)(timestamp)/, "predefined"],

      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@functions": "function",
            "@namespaces": "predefined",
            "@default": "identifier",
          },
        },
      ],
    ],

    whitespace: [
      [/\s+/, "white"],
      [/(^\/\/.*$)/, "comment"],
    ],

    operators: [
      [/(and)\b/, "operator"],
      [/(or)\b/, "operator"],
      [/(not)\b/, "operator"],
      [/(in)\b/, "operator"],
      [/(==)/, "operator"],
      [/(!=)/, "operator"],
      [/(>=)/, "operator"],
      [/(<=)/, "operator"],
      [/(<)/, "operator"],
      [/(>)/, "operator"],
      [/(\+)/, "operator"],
      [/(-)/, "operator"],
      [/(\*)/, "operator"],
      [/(\/)/, "operator"],
      [/(%)/, "operator"],
      [/(\?)/, "operator"],
      [/(:)/, "operator"],
      [/(\.)/, "operator"],
    ],

    // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation.
    numbers: [
      [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, "number.hex"],
      [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, "number"],
    ],

    // Recognize strings, including those broken across lines with \ (but not without).
    strings: [
      [/'$/, "string.escape", "@popall"],
      [/'/, "string.escape", "@stringBody"],
      [/"$/, "string.escape", "@popall"],
      [/"/, "string.escape", "@dblStringBody"],
    ],
    stringBody: [
      [/[^\\']+$/, "string", "@popall"],
      [/[^\\']+/, "string"],
      [/\\./, "string"],
      [/'/, "string.escape", "@popall"],
      [/\\$/, "string"],
    ],
    dblStringBody: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string"],
      [/"/, "string.escape", "@popall"],
      [/\\$/, "string"],
    ],
  },
};

export const completions: monaco.languages.CompletionItemProvider = {
  provideCompletionItems: (): { suggestions: any } => {
    const suggestions = [
      {
        label: "true",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "true",
      },
      {
        label: "false",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "false",
      },
      {
        label: "int",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "int ",
      },
      {
        label: "string",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "string ",
      },
      {
        label: "timestamp",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "timestamp ",
      },
      {
        label: "bool",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "bool ",
      },
      {
        label: "double",
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: "double ",
      },
      {
        label: "and",
        kind: monaco.languages.CompletionItemKind.Operator,
        insertText: "and",
      },
      {
        label: "or",
        kind: monaco.languages.CompletionItemKind.Operator,
        insertText: "or",
      },
      {
        label: "in",
        kind: monaco.languages.CompletionItemKind.Operator,
        insertText: "in",
      },
      {
        label: "not",
        kind: monaco.languages.CompletionItemKind.Operator,
        insertText: "not",
      },
      {
        label: "has",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "has(${1:e.f})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      {
        label: "all",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "all(${1:x},${2:p})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      {
        label: "exists",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "exists(${1:x},${2:p})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      {
        label: "exists_one",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "exists_one(${1:x},${2:p})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      {
        label: "map",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "map(${1:x},${2:t})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      {
        label: "filter",
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: "filter(${1:x},${2:p})",
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
    ];

    return { suggestions };
  },
};

export const parseModel = (languageID: string): void => {
  const definedMap = new Map();
  const arrName = new Set();

  // Analyse blocks included ident.
  model.decls.forEach(el => {
    if (el.ident) {
      let szTmp = el.name;
      const words = el.name.split(".");

      for (let i = words.length - 1; i >= 0; i--) {
        if (!arrName.has(words[i])) arrName.add(words[i]);
        szTmp = szTmp.slice(0, szTmp.length - words[i].length);
        if (i == 0) szTmp = "true";
        if (!definedMap.has(szTmp)) {
          const s = new Set();
          s.add(words[i]);
          definedMap.set(szTmp, s);
        } else {
          if (!definedMap.get(szTmp).has(words[i]))
            definedMap.get(szTmp).add(words[i]);
        }
        szTmp = szTmp.slice(0, szTmp.length - 1);
      }
    }
  });

  // Register namespace.
  for (const value of arrName) {
    monarchLanguage.namespaces.push(value);
  }
  // Make  completions of namespace from model.json.
  monaco.languages.registerCompletionItemProvider(languageID, {
    provideCompletionItems: (): { suggestions: any } => {
      const suggestions: monaco.languages.CompletionItem[] = [];
      for (const key of definedMap.keys()) {
        //add completions with commitCharactor '.'
        if (key == "true") {
          for (const value of definedMap.get(key)) {
            const node = {} as any;
            node.label = value;
            node.kind = monaco.languages.CompletionItemKind.Text;
            node.commitCharacters = ["."];
            node.insertText = node.label;
            suggestions.push(node);
          }
        }
      }

      return { suggestions };
    },
  });

  // Make completions for trigger.
  for (const key of definedMap.keys()) {
    monaco.languages.registerCompletionItemProvider(languageID, {
      triggerCharacters: ["."],
      provideCompletionItems(
        document: monaco.editor.ITextModel,
        position: monaco.Position
      ) {
        const suggestions = [];
        const linePrefix = document
          .getLineContent(position.lineNumber)
          .slice(0, position.column);
        if (!linePrefix.endsWith(key)) {
          return undefined;
        }
        for (const value of definedMap.get(key)) {
          const node = {} as any;
          node.label = value;
          node.insertText = node.label;
          node.commitCharacters = ["."];
          node.kind = monaco.languages.CompletionItemKind.Text;
          suggestions.push(node);
        }
        return { suggestions };
      },
    });
  }

  // Register function for highlighting.
  model.decls.forEach(el => {
    monarchLanguage.functions.push(el.name);
  });
  // Make  completions of functions from model.json and register functions in highlight list.
  monaco.languages.registerCompletionItemProvider(languageID, {
    provideCompletionItems: (): { suggestions: any } => {
      const suggestions: monaco.languages.CompletionItem[] = [];

      model.decls.forEach(el => {
        if (el.function) {
          // Only function.
          el.function.overloads.forEach(elOverloads => {
            // For all redefinitions of a function.
            const node = {} as any;
            node.kind = monaco.languages.CompletionItemKind.Function;
            node.insertTextRules =
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
            node.label = `${el.name} : ${elOverloads.overload_id}`;
            let txt = el.name + "(";
            let n = 0;
            for (const key in elOverloads.params) {
              let arg = {} as any;
              arg = elOverloads.params[key];
              if (arg.primitive) {
                n++;
                txt +=
                  "${" +
                  n +
                  ":" +
                  arg.primitive.toString().toLowerCase() +
                  "},";
              } else if (arg.well_known) {
                n++;
                txt +=
                  "${" +
                  n +
                  ":" +
                  arg.well_known.toString().toLowerCase() +
                  "},";
              }
            }
            if (n > 0) txt = txt.slice(0, txt.length - 1);
            txt += ")";
            node.insertText = txt;
            suggestions.push(node);
          });
        }
      });

      return { suggestions };
    },
  });
};
