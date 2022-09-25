// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavigationBar> = (args) => {
//   return <NavigationBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NavigationBar from './NavigationBar'

export const generated = () => {
  return <NavigationBar />
}

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>
