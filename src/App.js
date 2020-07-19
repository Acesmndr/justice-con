import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Countdown from './components/Countdown/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/justice-con/' render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 15:30:00 GMT+0100" {...routeProps} />} />
          <Route exact path='/justice-con/crisis' render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 07:00:00 EST-0400" crisis={true} {...routeProps} />} />
        </Switch>
        <div className="footer">Made with love by <a className="developer" href="https://twitter.com/xsmndr">xsmndr</a></div>
      </Router>
    </div>
  );
}

export default App;
