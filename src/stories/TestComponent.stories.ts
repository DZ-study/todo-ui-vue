import type { Meta, StoryObj } from '@storybook/vue3'

import TestComponent from './TestComponent.vue'

const meta:Meta<typeof TestComponent> = {
  title: 'Example/TestComponent',
  component: TestComponent,
  decorators: [
    () => ({ template: '<div style="padding: 3em; background: #ff0"><story /></div>'})
  ],
}

export default meta

type Story = StoryObj<typeof TestComponent>

export const Primary: Story = {
  render: args => ({
    components: { TestComponent },
    setup() {
      return {
        args
      }
    },
    template: '<TestComponent v-bind="agrs" />'
  }),
  args: {
    primary: true,
    test: false
  }
}