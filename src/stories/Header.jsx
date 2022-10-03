import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

export const Header = () => (
  <header>
    <div className="wrapper">
      <h1>React Tooltip</h1>
    </div>
  </header>
);

Header.propTypes = {};
