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

  useEffect(() => {
    let interval;

    if (isOn) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className="container">
      <div className='time'>
        {seconds}s
      </div>
      <div className='buttons'>
        <button
          className={`button ${isOn ? 'button--inactive' : 'button--active'}`}
          onClick={() => setIsOn(() => !isOn)}
          aria-label='Play'
          aria-pressed={isOn}
        >
          {isOn ? renderPauseContent() : renderStartContent()}
        </button>
        <button className='button button--secondary' onClick={onReset}>
          <ResetIcon />
          Reset
        </button>
      </div>
    </div>
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
