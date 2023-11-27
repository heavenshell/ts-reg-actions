import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    screenshot: {
      waitFor: 'myWait',
      captureBeyondViewport: false,
      viewport: {
        width: 400,
        height: 200,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Regression: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export default meta;
