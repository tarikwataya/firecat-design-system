/** @type { import('@storybook/react').Preview } */

import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { default: "dark"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;
