import type { Preview } from '@storybook/vue3'

import { setup } from '@storybook/vue3'

import { createPinia } from 'pinia'

setup(app => {
  // 注册全局Pinia实例，供所有的story消费
  app.use(createPinia())
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  // 全局Decorators
  decorators: [
    story => ({
      components: { story },
      template: '<div style="height: 100%"><story /></div>'
    })
  ]
}

export default preview
