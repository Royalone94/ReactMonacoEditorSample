const {
  override,
  addBabelPlugins,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  addBabelPlugins("babel-plugin-macros", "babel-plugin-styled-components", [
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src",
      rootPathPrefix: "~",
    },
  ]),
  addPostcssPlugins([require("autoprefixer")])
);

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ["javascript"],
    })
  );
  return config;
};
