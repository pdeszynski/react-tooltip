import { ComponentMeta } from '@storybook/react';
import React from 'react';
import ReactTooltip from '../src/index';

import { Page } from './Page';

export default {
  title: 'Example/Advanced features',
  component: ReactTooltip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    controls: {
      exclude: ['children']
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
  }
} as ComponentMeta<typeof ReactTooltip>;

export const Customization = (args) => (
  <Page title="Customization">
    <div className="demonstration">
      <div>
        <a data-tip data-for="happyFace">
          {' '}
          d(`･∀･)b{' '}
        </a>
        <ReactTooltip id="happyFace" type="error" {...args}>
          <span>Show happy face</span>
        </ReactTooltip>
      </div>
      <div>
        <a data-tip data-for="sadFace">
          {' '}
          இдஇ{' '}
        </a>
        <ReactTooltip id="sadFace" type="warning" effect="solid" {...args}>
          <span>Show sad face</span>
        </ReactTooltip>
      </div>
    </div>
  </Page>
);

Customization.parameters = {
  controls: {
    exclude: /.*/g
  }
};

export const GlobalTooltip = (args) => (
  <Page title="Global tooltip">
    <div className="demonstration">
      <div>
        <a data-tip data-for="global">
          {' '}
          σ`∀´)σ{' '}
        </a>
      </div>
      <div>
        <a data-tip data-for="global">
          {' '}
          (〃∀〃){' '}
        </a>
      </div>
      <ReactTooltip id="global" aria-haspopup="true" multiline="true" {...args}>
        <p>This is a global react component tooltip</p>
        <p>You can put every thing here</p>
        <ul>
          <li>Word</li>
          <li>Chart</li>
          <li>Else</li>
        </ul>
      </ReactTooltip>
    </div>
  </Page>
);

GlobalTooltip.parameters = {
  controls: {
    exclude: /.*/g
  }
};

export const AllProps = (args) => (
  <Page title="All props">
    <div className="demonstration">
      <div>
        <a data-tip data-for="all-props">
          Hover me to see a tooltip.
        </a>
      </div>
      <ReactTooltip id="all-props" {...args}>
        <p>This is an example tooltip</p>
      </ReactTooltip>
    </div>
  </Page>
);
