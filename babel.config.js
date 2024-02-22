module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    ['module-resolver', {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ]
};
