import React from 'react';
import moment from 'moment';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const convertToAddToCalendarUrl = ({ title, from, to, link }) => {
  const startTime = moment(from).format('YYYYMMDDTHHmmssZ');
  const endTime = moment(to).format('YYYYMMDDTHHmmssZ');
  return encodeURI(`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&text=Justice Con: ${title}&details=Watch here: ${link || 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'}`);
};

const TimelineElement = ({
  id,
  from,
  to,
  title,
  link,
  guests,
  hosts,
}) => {
  const addToCalendarUrl = convertToAddToCalendarUrl({ title, from, to, link });

  return (<VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle= {{ backgroundColor: '#5b6467',
        backgroundImage: 'linear-gradient(315deg, #5b6467 0%, #8b939a 74%)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid #212121' }}
      date={to ? `${moment(from).format('MMMM Do, h:mm a')} - ${moment(to).format('h:mm a')}` : moment(from).format('MMMM Do, h:mm a') }
      iconStyle={{ backgroundColor: '#e69b35', backgroundSize: 'fit', color: '#fff' }}
      icon={<img className="event-logo" src={require('../../icon.png')} alt="product" />}
    >
      <div className="title">
        <a data-tip="Visit video link" href={link || 'https://www.youtube.com/channel/UCmbXef0QoqdIfcXUMj_DD7A'} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>

      <div className="event-details">
        <div data-tip="Add to calendar" className="jc-event-logo">
          <a href={addToCalendarUrl} target="_blank" rel="noopener noreferrer">
            <img alt="Event logo" src={require('../../justicecon21.png')} />
          </a>
        </div>
        <div className="hosts-and-guests">
          <div className="host">
            <div className="host-title">Host{hosts.length > 1 ? 's' : ''}</div>
            {hosts.map((host, idx) => <div key={`host${idx}`}><img alt="Host" className="host-icon" src={require('../../host.png')} />{host}</div>)}
          </div>
          {guests.length ?
          <div className="guests">
            <div className="guest-title">Guest{guests.length > 1 ? 's' : ''}</div>
            {guests.map((guest, idx) => <div className="guest" key={`guest${idx}`}><img alt="Guest" className="guest-icon" src={require('../../guest.png')} />{guest}</div>)}
          </div> : null}
        </div>
      </div>
    </VerticalTimelineElement>);
};

export default TimelineElement;
