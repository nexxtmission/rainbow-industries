module.exports = {
  "stories": [
    "../packages/**/docs/**/*.stories.mdx",
    "../packages/**/docs/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // add the aliases here
    }

    return config;
  }
}