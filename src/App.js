import './App.css';
import { PauseIcon, ResetIcon, StartIcon } from './icons';
import React, { useState } from 'react';

function App() {

  const [isOn, setIsOn] = useState(false);

  const onReset = () => {
    setIsOn(false)
  }

  return (
    <div className="container">
      <div className='time'>
        00:00
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
