import PropTypes from 'prop-types';

export const StartButtonTypes = {
  startTimer: PropTypes.func.isRequired,
};

export const StopButtonTypes = {
  stopTimer: PropTypes.func.isRequired,
};

export const ResetButtonTypes = {
  resetTimer: PropTypes.func.isRequired,
};

export const WaitButtonTypes = {
  wait: PropTypes.func.isRequired,
};

export const DisplayTypes = PropTypes.shape({
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}).isRequired;

export const ControlPanelTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
