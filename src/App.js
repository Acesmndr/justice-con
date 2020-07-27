import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Countdown from './components/Countdown/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 15:30:00 GMT+0100" toDate="Sun, 26 Jul 2020 23:45:00 GMT+0100" {...routeProps} />} />
          <Route path='/crisis' render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 07:00:00 GMT-0400" toDate="Sun, 27 Jul 2020 00:00:00 GMT-0400" crisis={true} {...routeProps} />} />
          <Route path='/cois' render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 07:00:00 GMT-0400" toDate="Sun, 27 Jul 2020 00:00:00 GMT-0400" crisis={true} {...routeProps} />} />
          <Route render={(routeProps) => <Countdown forDate="Sat, 25 Jul 2020 15:30:00 GMT+0100" toDate="Sun, 26 Jul 2020 23:45:00 GMT+0100" {...routeProps} />} />
        </Switch>
        <div className="footer">Made with love by <a className="developer" href="https://twitter.com/xsmndr">xsmndr</a></div>
      </HashRouter>
    </div>
  );
}

export default App;
