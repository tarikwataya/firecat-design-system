import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@firecat-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/tarikwataya.png',
    alt: 'Git Wataya',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithCallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
