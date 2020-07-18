import React from 'react';
import Countdown from './components/Countdown/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countdown forDate="Sat, 25 Jul 2020 15:30:00 GMT+0100" />
      <div className="footer">Made with love by <a className="developer" href="https://twitter.com/xsmndr">xsmndr</a></div>
    </div>
  );
}

export default App;
