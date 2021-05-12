import React from 'react';
import { StartButton } from './Buttons/StartButton';
import { StopButton } from './Buttons/StopButton';
import { ResetButton } from './Buttons/ResetButton';
import { WaitButton } from './Buttons/WaitButton';
import './ControlPanel.scss';
import { ControlPanelTypes } from '../../Types';

export const ControlPanel = ({
  startTimer,
  stopTimer,
  resetTimer,
  wait,
  status,
}) => (
  <div className="stopwatch__control-panel control-panel">
    {status === 'stop'
      ? (<StartButton startTimer={startTimer} />)
      : ('')
    }

    {status === 'run' ? (
      <div>
        <WaitButton wait={wait} />
        <StopButton stopTimer={stopTimer} />
        <ResetButton resetTimer={resetTimer} />
      </div>
    ) : ('')}

    {status === 'wait' ? (
      <div>
        <StartButton startTimer={startTimer} />
        <StopButton stopTimer={stopTimer} />
      </div>
    ) : ('')}
  </div>
);

ControlPanel.propTypes = ControlPanelTypes;
