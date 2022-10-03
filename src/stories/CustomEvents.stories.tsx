import { ComponentMeta } from '@storybook/react';
import React from 'react';
import ReactTooltip from '../index';

import { Page } from './Page';

export default {
  title: 'Example/Custom Events',
  component: ReactTooltip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    controls: {
      exclude: /.*/g
    }
  }
} as ComponentMeta<typeof ReactTooltip>;

export const CustomEvents = (args) => (
  <Page title="Customization">
    <div className="demonstration">
      <div>
        <a data-tip="custom show" data-event="click focus">
          ( •̀д•́)
          <br />
          Click to show a tooltip.
        </a>
        <ReactTooltip globalEventOff="click" />
      </div>
      <div>
        <a
          data-tip="custom show and hide"
          data-event="click"
          data-event-off="dblclick"
        >
          ( •̀д•́)
          <br />
          Click to show and double click to hide a tooltip
        </a>
        <ReactTooltip />
      </div>
    </div>
  </Page>
);
