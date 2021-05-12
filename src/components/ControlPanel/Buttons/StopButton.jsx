import React from 'react';
import { StopButtonTypes } from '../../../Types';

export const StopButton = ({ stopTimer }) => (
  <button
    type="button"
    className="control-panel__button start-button"
    onClick={stopTimer}
  >
    Stop
  </button>
);

StopButton.propTypes = StopButtonTypes;
