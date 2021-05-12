import React from 'react';
import { DisplayTypes } from '../../Types';

export const Display = ({ time }) => (
  <div className="stopwatch__display">
    <span>
      {(time.hours >= 10) ? time.hours : `0${time.hours}`}
    </span>

    &nbsp;:&nbsp;

    <span>
      {(time.minutes >= 10) ? time.minutes : `0${time.minutes}`}
    </span>

    &nbsp;:&nbsp;

    <span>
      {(time.seconds >= 10) ? time.seconds : `0${time.seconds}`}
    </span>
  </div>
);

Display.propTypes = DisplayTypes;
