module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleFileExtensions:[
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transformIgnorePatterns:[
    "node_modules/(?!react-native|react-navigation)/"
  ],
};
