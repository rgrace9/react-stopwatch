import './App.css';
import { PauseIcon, ResetIcon, StartIcon } from './icons';
import React, { useState } from 'react';

function App() {

  const [isOn, setIsOn] = useState(false);

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

  return (
    <div className="container">
      <div className='time'>
        00:00
      </div>
      <div className='buttons'>
        <button
          className={`button ${isOn ? 'button--active' : 'button--inactive'}`}
          onClick={() => setIsOn(() => !isOn)}
        >
          {isOn ? renderStartContent() : renderPauseContent()}
        </button>
        <button className='button button--secondary'>
          <ResetIcon />
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
