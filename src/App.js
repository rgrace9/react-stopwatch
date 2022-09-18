import './App.css';
import { PauseIcon, ResetIcon, StartIcon } from './icons';
import React, { useEffect, useState } from 'react';

function App() {

  const [isOn, setIsOn] = useState(false);

  const [seconds, setSeconds] = useState(0);

  const onReset = () => {
    setIsOn(false);
    setSeconds(0);
  }

  const formatTime = () => {
    let hours = Math.floor(seconds / 3600); // returns the number of full hours
    let minutes = Math.floor((seconds % 3600) / 60); // returns the number of full minutes that remain after getting the number of full hours
    let remainingSeconds = Math.floor(seconds % 60); // returns the remaining seconds
    let formattedTime = '';

    if (hours > 0) {
      formattedTime = `${hours}:${minutes < 10 ? '0' : ''}`
    }

    formattedTime = `${formattedTime}${minutes}:${(remainingSeconds < 10 ? '0' : '')}`;
    return `${formattedTime}${remainingSeconds}`;
  }

  useEffect(() => {
    if (isOn) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOn, seconds]);

  return (
    <main className="container">
      <h1 className='heading'>Stopwatch</h1>
      <div className='time'>
        {formatTime(seconds)}
      </div>
      <div className='buttons'>
        <button
          className={`button ${isOn ? 'button--inactive' : 'button--active'}`}
          onClick={() => setIsOn(() => !isOn)}
        >
          {isOn ? renderPauseContent() : renderStartContent()}
        </button>
        <button className='button button--secondary' onClick={onReset}>
          <ResetIcon />
          Reset
        </button>
      </div>
    </main>
  );
}

const renderStartContent = () => {

  return (
    <React.Fragment>
      <StartIcon />
      Start
    </React.Fragment>
  );
}

const renderPauseContent = () => {

  return (
    <React.Fragment>
      <PauseIcon />
      Pause
    </React.Fragment>
  );
}

export default App;
