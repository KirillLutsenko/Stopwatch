import React from 'react';
import { WaitButtonTypes } from '../../../Types';

export const WaitButton = ({ wait }) => (
  <button
    type="button"
    className="control-panel__button start-button"
    onClick={wait}
  >
    Wait
  </button>
);

WaitButton.propTypes = WaitButtonTypes;
