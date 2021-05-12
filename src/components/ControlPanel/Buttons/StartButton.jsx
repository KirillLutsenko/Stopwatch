import React from 'react';
import { StartButtonTypes } from '../../../Types';

export const StartButton = ({ startTimer }) => (
  <button
    type="button"
    className="control-panel__button start-button"
    onClick={startTimer}
  >
    Start
  </button>
);

StartButton.propTypes = StartButtonTypes;
