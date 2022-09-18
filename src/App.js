import './App.css';
import { PauseIcon, ResetIcon, StartIcon } from './icons';


function App() {
  return (
    <div className="container">
      <div className='time'>
        00:00
      </div>
      <div className='buttons'>
      <button className='button button--active'>
          <StartIcon />
          Start
        </button>
        <button className='button button--inactive'>
          <PauseIcon />
          Pause
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
