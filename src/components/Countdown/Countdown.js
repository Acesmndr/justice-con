import React from 'react';
import moment from 'moment';
import './index.scss';
import Timeline from '../Timeline/Timeline';
import CurrentlyRunning from '../Timeline/CurrentRunning';
import { Link } from 'react-router-dom';
import Countup from '../Countup/Countup';

const Countdown = ({ forDate, toDate, crisis }) => {
  const intervalRef = React.useRef(null);
  const [days, setDays] = React.useState(undefined);
  const [hours, setHours] = React.useState(undefined);
  const [minutes, setMinutes] = React.useState(undefined);
  const [seconds, setSeconds] = React.useState(undefined);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const til = moment(forDate);
      const now = moment();
      if (til.diff(now, 'seconds') < 0) {
        // clear interval when time is reached
        clearInterval(intervalRef.current);
      }
      const days = til.diff(now, 'days');
      now.add(days, 'days');
      const hours = til.diff(now, 'hours');
      now.add(hours, 'hours');
      const minutes = til.diff(now, 'minutes');
      now.add(minutes, 'minutes');
      const seconds = til.diff(now, 'seconds');
      setDays(days || '0');
      setHours(hours || '0');
      setMinutes(minutes || '0');
      setSeconds( seconds || '0');
    }, 1000);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    }
  }, [forDate]);

  if (moment(forDate).diff(moment(), 'seconds') < 0) {
    if (moment(toDate).diff(moment(), 'seconds') < 0) {
      return <Countup toDate={toDate} crisis={crisis} />
    }
    return (<div style={{ width: '80vw' }}>
    <Link to={crisis ? "" : "cois"} className="link-right">
      <img className="switch-logo" src={require(!crisis ? '../../crisis.png' : '../../justicecon.png')} alt="logo "/>
    </Link>
    <div className='countdown-div'>
      <img className="logo" src={require(crisis ? '../../crisis.png' : '../../justicecon.png')} alt="logo "/>
          <div className='countdown-wrapper'>
            <>
              <CurrentlyRunning crisis={crisis} />
            </>
          </div>
          <h1 className="arrow">↓</h1>
      </div>
      <Timeline crisis={crisis} />
    </div>);
  }
  
  return (
    <div style={{ width: '80vw' }}>
    <Link to={crisis ? "" : "cois"} className="link-right">
      <img className="switch-logo" src={require(!crisis ? '../../crisis.png' : '../../justicecon.png')} alt="logo "/>
    </Link>
    <div className='countdown-div'>
      <img className="logo" src={require(crisis ? '../../crisis.png' : '../../justicecon.png')} alt="logo "/>
          <div className='countdown-wrapper'>
                  {days && (
                      <div className='countdown-item'>
                          {days} <span>days</span>
                      </div>
                  )}
                  {hours && (
                      <div className='countdown-item'>                            
                          {hours} <span>hours</span>
                      </div>
                  )}
                  {minutes && (
                      <div className='countdown-item'>
                          {minutes} <span>minutes</span>
                      </div>
                  )}
                  {seconds && (
                      <div className='countdown-item'>
                          {seconds} <span>seconds</span>
                      </div>
                  )}
              </div>
      <h3><a className="schedule-link" href="#day1">July 25</a> - <a className="schedule-link" href="#day2">26, 2020</a></h3>
      <h1 className="arrow">↓</h1>
    </div>
    <Timeline crisis={crisis} />
    </div>
  )
}

export default Countdown;
