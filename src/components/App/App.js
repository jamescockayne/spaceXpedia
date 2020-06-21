import React from 'react';
import './App.css';
import Countdown from '../Countdown/Countdown';
import LaunchInformation from '../LaunchInformation/LaunchInformation';

function App() {

  return (
    <div className="App">
      <Countdown />
      <LaunchInformation />
    </div>
  );
}

export default App;
