import React from 'react';
import { ResetButtonTypes } from '../../../Types';

export const ResetButton = ({ resetTimer }) => (
  <button
    type="button"
    className="control-panel__button start-button"
    onClick={resetTimer}
  >
    Reset
  </button>
);

ResetButton.propTypes = ResetButtonTypes;
