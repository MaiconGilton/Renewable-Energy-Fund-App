module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@utils',
            rootPathSuffix: './src/utils',
          },
          {
            rootPathPrefix: '@services',
            rootPathSuffix: './src/services',
          },
          {
            rootPathPrefix: '@components',
            rootPathSuffix: './src/components',
          },
          {
            rootPathPrefix: '@assets',
            rootPathSuffix: './src/assets',
          },
          {
            rootPathPrefix: '@theme',
            rootPathSuffix: './src/theme',
          },
          {
            rootPathPrefix: '@screens',
            rootPathSuffix: './src/screens',
          },
          {
            rootPathPrefix: '@store',
            rootPathSuffix: './src/store',
          },
          {
            rootPathPrefix: '@navigation',
            rootPathSuffix: './src/navigation',
          },
          {
            rootPathPrefix: '@mocks',
            rootPathSuffix: './src/mocks',
          },
        ],
      }
    ]
  ]
}