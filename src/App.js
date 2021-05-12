import React, { useState } from 'react';
import { Display } from './components/Display/Display';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import './App.scss';

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState('stop');

  let updateHours = time.hours;
  let updateMinutes = time.minutes;
  let updateSeconds = time.seconds;
  let timeStamp = 0;

  const runTimer = () => {
    if (updateMinutes === 60) {
      updateHours += 1;
      updateMinutes = 0;
    }

    if (updateSeconds === 60) {
      updateMinutes += 1;
      updateSeconds = 0;
    }

    updateSeconds += 1;

    return setTime({
      hours: updateHours,
      minutes: updateMinutes,
      seconds: updateSeconds,
    });
  };

  const startTimer = () => {
    runTimer();
    setStatus('run');
    setInterv(setInterval(runTimer, 1000));
  };

  const stopTimer = () => {
    clearInterval(interv);
    setStatus('stop');
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  const resetTimer = () => {
    clearInterval(interv);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    updateHours = 0;
    updateMinutes = 0;
    updateSeconds = 0;

    setInterv(setInterval(runTimer, 1000));
  };

  const wait = () => {
    const clickTime = new Date().getTime();

    if (clickTime - timeStamp < 300) {
      clearInterval(interv);
      setStatus('wait');
    }

    timeStamp = clickTime;
  };

  return (
    <div className="app">
      <div className="app____stopwatch-holder stopwatch-holder">
        <div className="stopwatch-holder__stopwatch stopwatch">
          <Display time={time} />
          <ControlPanel
            startTimer={startTimer}
            stopTimer={stopTimer}
            resetTimer={resetTimer}
            wait={wait}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
