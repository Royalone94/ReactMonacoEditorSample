import { monaco } from "react-monaco-editor";
import { languageExtensionPoint, languageID, themeID } from "./config";
import {
  configuration,
  completions,
  monarchLanguage,
  parseModel,
} from "./SpertaLang";
import { SpertaTheme } from "./SpertaTheme";

export const setupLanguage = (): void => {
  monaco.languages.register(languageExtensionPoint);

  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setLanguageConfiguration(languageID, configuration);
    monaco.languages.registerCompletionItemProvider(languageID, completions);
    // Parse sperta language model.
    parseModel(languageID);

    monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
  });

  monaco.editor.defineTheme(themeID, SpertaTheme);
};
