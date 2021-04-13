import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Countdown from './components/Countdown/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' render={(routeProps) => <Countdown forDate="Fri, 16 Apr 2021 06:00:00 GMT-0400" toDate="Sun, 18 Apr 2021 19:30:00 GMT-0400" {...routeProps} />} />
          <Route render={(routeProps) => <Countdown forDate="Fri, 16 Apr 2021 06:00:00 GMT-0400" toDate="Sun, 18 Apr 2021 19:30:00 GMT-0400" {...routeProps} />} />
        </Switch>
        <div className="footer">Made with love by <a className="developer" href="https://twitter.com/xsmndr">xsmndr</a></div>
        <ReactTooltip />
      </HashRouter>
    </div>
  );
}

export default App;
