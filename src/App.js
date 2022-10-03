import './App.css';
import { PauseIcon, ResetIcon, StartIcon } from './icons';
import React, { useEffect, useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isActive, seconds])

  const toggle = () => {
    setIsActive(prevState => !prevState)
  }

  const reset = () => {
    setIsActive(false);
    setSeconds(0)
  }

  const buttonContent = () => {
    if(isActive) {
      return (
        <React.Fragment>
          <PauseIcon />
          Pause
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <StartIcon />
        Start
      </React.Fragment>
    )
  }

  return (
    <main className="container">
      <h1 className='heading'>Stopwatch</h1>
      <div className='time'>
        {seconds} <abbr title='seconds'>s</abbr>
      </div>
      <div className='buttons'>
        <button className={`button ${isActive ? 'button--inactive' : 'button--active'}`} onClick={toggle}>
          {buttonContent()}
        </button>
        <button className='button button--secondary' onClick={reset}>
          <ResetIcon />
          Reset
        </button>
      </div>
    </main>
  );
}

export default App;
