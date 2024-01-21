import type { Meta, StoryObj } from '@storybook/vue3'

import Slide from './Slide.vue'

const meta:Meta<typeof Slide> = {
  title: 'Example/Slide',
  component: Slide,
  args: { // 这里给组件传props                                                                                                                                                                                                              
    seperator: 2,
    minWidths: [100, 200]
  }
}

export default meta

type Story = StoryObj<typeof Slide>

export const Default: Story = {
  render: args => ({
    components: { Slide },
    setup() {
      return {
        args
      }
    },
    args: { // TODO: 这里的args，组件里接收不到
      seperator: 2,
      minWidths: [100, 100]
    },
    template: `<Slide v-bind="args">
      <template #slide1>
        Slide1
        <div style="width: 80%; margin-left: 10%; background: #f00; height: 100px"></div>
      </template>
      <template #slide2>
        Slide2
      </template>
      <template #slide3>
        Slide3
      </template>
    </Slide>`
  })
}