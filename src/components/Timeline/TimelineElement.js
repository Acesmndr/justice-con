import React from 'react';
import moment from 'moment';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


const TimelineElement = ({
  id,
  from,
  to,
  title,
  subtitle,
  description,
}) => (
  <VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle= {{ backgroundColor: '#5b6467',
        backgroundImage: 'linear-gradient(315deg, #5b6467 0%, #8b939a 74%)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid #687175' }}
      date={to ? `${moment(from).format('MMMM Do, h:mm a')} - ${moment(to).format('h:mm a')}` : moment(from).format('MMMM Do, h:mm a') }
      iconStyle={{ backgroundColor: '#e69b35', backgroundSize: 'fit', color: '#fff' }}
      icon={<img className="event-logo" src={require('../../icon.png')} alt="product" />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>
        {description}
      </p>
    </VerticalTimelineElement>
);

export default TimelineElement;
