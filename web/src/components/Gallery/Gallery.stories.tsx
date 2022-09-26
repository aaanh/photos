// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Gallery> = (args) => {
//   return <Gallery {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Gallery from './Gallery'

export const generated = () => {
  return <Gallery />
}

export default {
  title: 'Components/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>
