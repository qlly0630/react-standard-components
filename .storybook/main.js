const path = require('path');
module.exports = {
  stories: [
    '../stories/*.stories.mdx',
    '../stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    'storybook-mobile',
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    };
    return config;
  }
}