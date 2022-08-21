const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/e2e", "@react-native"],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
  },
}
