import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DefaultWrapperLayout from './DefaultWrapperLayout'

export const generated: ComponentStory<typeof DefaultWrapperLayout> = (args) => {
  return <DefaultWrapperLayout {...args} />
}

export default {
  title: 'Layouts/DefaultWrapperLayout',
  component: DefaultWrapperLayout,
} as ComponentMeta<typeof DefaultWrapperLayout>
