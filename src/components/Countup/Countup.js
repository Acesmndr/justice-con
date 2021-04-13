import React from 'react';
import moment from 'moment';
import './index.scss';
import Timeline from '../Timeline/Timeline';

const Countup = ({ toDate }) => {
  const intervalRef = React.useRef(null);
  const [days, setDays] = React.useState(undefined);
  const [hours, setHours] = React.useState(undefined);
  const [minutes, setMinutes] = React.useState(undefined);
  const [seconds, setSeconds] = React.useState(undefined);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const from = moment(toDate);
      const til = moment();
      const days = til.diff(from, 'days');
      console.log(days, 'asd');
      from.add(days, 'days');
      const hours = til.diff(from, 'hours');
      from.add(hours, 'hours');
      const minutes = til.diff(from, 'minutes');
      from.add(minutes, 'minutes');
      const seconds = til.diff(from, 'seconds');
      setDays(days || '0');
      setHours(hours || '0');
      setMinutes(minutes || '0');
      setSeconds( seconds || '0');
    }, 1000);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    }
  }, [toDate]);
  
  return (
    <div style={{ width: '80vw' }}>
    <div className='countdown-div'>
      <img className="logo" src={require('../../justicecon.png')} alt="logo "/>
      <div className='countdown-wrapper'>
        <div className="break spacing-top" />
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
        <div className="break" />
        <div className="description">
          since <b>Justice Con 2021</b>
        </div>
      </div>
      <h3><a className="schedule-link" href="#day1">Apr 16</a><a className="schedule-link" href="#day2"> - </a><a className="schedule-link" href="#day3">18, 2021</a></h3>
      <div>
        <a data-tip="Jump to first day schedule" className="schedule-link-pin" href="#day1">1</a>
        <a data-tip="Jump to second day schedule" className="schedule-link-pin" href="#day2">2</a>
        <a data-tip="Jump to third day schedule" className="schedule-link-pin" href="#day3">3</a>
      </div>
      <h1 className="countup-arrow">↓</h1>
    </div>
    <Timeline />
    </div>
  )
}

export default Countup;
