import { ComponentMeta } from '@storybook/react';
import React from 'react';
import ReactTooltip from '../index';

import { Page } from './Page';

export default {
  title: 'Example/Basic features',
  component: ReactTooltip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    controls: {
      include: ['place', 'type', 'effect']
    }
  },
  argTypes: {
    place: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom'],
      defaultValue: 'top',
      description: 'Position tooltip'
    },
    type: {
      control: 'select',
      options: ['dark', 'success', 'warning', 'error', 'info', 'light'],
      defaultValue: 'dark',
      description: 'Predefined look of a tooltip'
    },
    effect: {
      control: 'select',
      options: ['float', 'solid'],
      defaultValue: 'float',
      description:
        'Float will follow your cursor, whether solid will stay in one place after hover'
    }
  },
  args: {
    place: 'top',
    type: 'dark',
    effect: 'float'
  }
} as ComponentMeta<typeof ReactTooltip>;

const Template = (args) => (
  <Page title="Basic features">
    <div className="demonstration">
      <a
        data-for="basic"
        data-tip="Hello<br />from basic example for<br />React Tooltip"
        data-iscapture="true"
      >
        {' '}
        Hover on me{' '}
      </a>
      <ReactTooltip
        id="basic"
        place={args.place}
        type={args.type}
        effect={args.effect}
        multiline={true}
      />
    </div>
  </Page>
);

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const BasicFeatures = Template.bind({});
