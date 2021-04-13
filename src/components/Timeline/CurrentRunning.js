import React from 'react';
import moment from 'moment';
import { JC_DAY_ONE, JC_DAY_TWO, JC_DAY_THREE } from './JusticeCon21';
import './CurrentlyRunning.scss';

const _findCurrentlyRunningSchedule = (schedule) => {
  const currentMoment = moment();
  for (let i = 0; i < schedule.length; i++) {
    if(currentMoment.diff(moment(schedule[i].from), 'seconds') < 0) {
      return Object.assign({ upcoming: true }, schedule[i]);
    }
    if(moment(schedule[i].to || moment(schedule[i].from).add(2, 'hours')).diff(currentMoment, 'seconds') > 0) {
      return schedule[i];
    }
    if(i + 1 < schedule.length && currentMoment.diff(moment(schedule[i].from), 'seconds') < 0) {
      return Object.assign({ upcoming: true }, schedule[i+1]);
    }
  }
  return false;
}

const CurrentlyRunning = () => {
  const [schedule, setSchedule] = React.useState(null);
  const currentlyRunningRef = React.useRef(null);
  React.useEffect(() => {
    currentlyRunningRef.current = setInterval(() => {
      setSchedule(_findCurrentlyRunningSchedule(JC_DAY_ONE) || _findCurrentlyRunningSchedule(JC_DAY_TWO) || _findCurrentlyRunningSchedule(JC_DAY_THREE) || { completed: true });
    }, 15000);

    setSchedule(_findCurrentlyRunningSchedule(JC_DAY_ONE) || _findCurrentlyRunningSchedule(JC_DAY_TWO) || _findCurrentlyRunningSchedule(JC_DAY_THREE) || { completed: true });

    return () => {
      currentlyRunningRef.current && clearInterval(currentlyRunningRef.current);
    }
  }, []);

  if(!schedule) {
    return null;
  }

  if(schedule.completed === true) {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return <div className="currently-running">
    <div className="running-event-details">
        <div className="event-title">
          <a data-tip="Visit video link" href={schedule.link || 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'} target="_blank" rel="noopener noreferrer">{schedule.title}</a>
        </div>
        <div className="break-row" />
        <div data-tip="View event" className="jc-event-logo">
          <a data-tip="Visit video link" href={schedule.link || 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'} target="_blank" rel="noopener noreferrer"><img alt="Event logo" src={require('../../justicecon21.png')} /></a>
        </div>
        <div className="hosts-and-guests">
          <div className="host">
            <div className="host-title">Host{schedule.hosts.length > 1 ? 's' : ''}</div>
            {schedule.hosts.map(host => <div><img alt="Host" className="host-icon" src={require('../../host.png')} />{host}</div>)}
          </div>
          {schedule.guests.length ?
          <div className="guests">
            <div className="guest-title">Guest{schedule.guests.length > 1 ? 's' : ''}</div>
            {schedule.guests.map(guest => <div className="guest"><img alt="Guest" className="guest-icon" src={require('../../guest.png')} />{guest}</div>)}
          </div> : null}
          <div className="timing">
            <div className="timing-title">Schedule</div>
            <div>
              <img alt="Timing" className="timing-icon" src={require('../../clock.png')} />
              {schedule.to ? `${moment(schedule.from).format('h:mm a')} - ${moment(schedule.to).format('h:mm a')}` : moment(schedule.from).format('MMMM Do, h:mm a')}
              <a data-tip="View panel" href={schedule.link || 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'} target="_blank" rel="noopener noreferrer">
                {
                  schedule.upcoming ?
                    <div className="status">Up next</div> :
                    <div className="status live">Live</div>
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    <div className="description">
      {schedule.description}
    </div>
  </div>;
}

export default CurrentlyRunning;
