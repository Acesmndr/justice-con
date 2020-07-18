import React from 'react';
import moment from 'moment';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';

const LinkElement = ({ title }) => <a key={`key-${title}`} href={`https://twitter.com/${title}`} target="_blank" rel="noopener noreferrer">@{title}</a>;

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

const createTimelineElements = () => {
  const day1 = [{
    from: 'Sat, 25 Jul 2020 15:30:00 GMT',
    to: 'Sat, 25 Jul 2020 15:45:00 GMT',
    title: 'Introduction to Justice Con',
    subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>,
  },{
    from: 'Sat, 25 Jul 2020 16:00:00 GMT',
    to: 'Sat, 25 Jul 2020 16:45:00 GMT',
    title: 'Ink To The People',
    subtitle: <>Todd Richheimer, <LinkElement title='inktothepeople' /></>,
  }, {
    from: 'Sat, 25 Jul 2020 17:00:00 GMT',
    to: 'Sat, 25 Jul 2020 18:00:00 GMT',
    title: 'Spotlight on Ray Porter',
    subtitle: <LinkElement title='Ray__Porter' />
  }, {
    from: 'Sat, 25 Jul 2020 18:15:00 GMT',
    to: 'Sat, 25 Jul 2020 19:15:00 GMT',
    title: 'American Foundation For Suicide Prevention',
    subtitle: <LinkElement title='afspnational' />
  }, {
    from: 'Sat, 25 Jul 2020 19:45:00 GMT',
    to: 'Sat, 25 Jul 2020 20:45:00 GMT',
    title: 'Spotlight on Jay Oliva',
    subtitle: <LinkElement title='jayoliva1' />
  }, {
    from: 'Sat, 25 Jul 2020 21:00:00 GMT',
    to: 'Sat, 25 Jul 2020 22:15:00 GMT',
    title: 'Spotlight on Ray Fisher',
    subtitle: <LinkElement title='ray8fisher' />
  }, {
    from: 'Sat, 25 Jul 2020 22:30:00 GMT',
    title: 'Spotlight on Zack Snyder',
    subtitle: <LinkElement title='ZackSnyder' />
  }];
  return day1.map((d, i) => (<TimelineElement {...d} key={`event-${i}`} />));
}

const createSecondDayTimelineElements = () => {
  const day1 = [{
    from: 'Sun, 26 Jul 2020 14:45:00 GMT',
    to: 'Sun, 26 Jul 2020 15:45:00 GMT',
    title: 'Spotlight on Fabian Wagner',
    subtitle: 'Fabian Wagner',
  },{
    from: 'Sun, 26 Jul 2020 16:00:00 GMT',
    to: 'Sun, 26 Jul 2020 17:00:00 GMT',
    title: 'Clay Enos and Kristine Cabanban',
    subtitle: <><LinkElement title='ClayEnos' /> & Kristine Cabanban</>,
  }, {
    from: 'Sun, 26 Jul 2020 17:15:00 GMT',
    to: 'Sun, 26 Jul 2020 18:15:00 GMT',
    title: 'Deborah Snyder and Snyder\'s Amazons',
    subtitle: <>Deborah Snyder, <LinkElement title='CaresDaniella' />, <LinkElement title='ChicCattLady2' /></>
  }, {
    from: 'Sun, 26 Jul 2020 18:30:00 GMT',
    to: 'Sun, 26 Jul 2020 19:30:00 GMT',
    title: 'Diversity in Zack Snyder\'s films',
    subtitle: <><LinkElement title='nexuspong' />, <LinkElement title='SherazFarooqi_' /> & <LinkElement title='JonitaLDavis' /></>
  }, {
    from: 'Sun, 26 Jul 2020 20:00:00 GMT',
    to: 'Sun, 26 Jul 2020 21:00:00 GMT',
    title: 'Artists of #ReleaseTheSnyderCut',
    subtitle: <><LinkElement title='mightypegasus88' />, <LinkElement title='BeaverMighty' />, <LinkElement title='Nimo5877' /> and <LinkElement title='Butterbarr' /></>
  }, {
    from: 'Sun, 26 Jul 2020 21:15:00 GMT',
    to: 'Sun, 26 Jul 2020 22:30:00 GMT',
    title: 'Sean O\'Connell & #ReleaseTheSnyderCut Book',
    subtitle: <LinkElement title='Sean_OConnell' />
  }, {
    from: 'Sun, 26 Jul 2020 22:45:00 GMT',
    to: 'Sun, 26 Jul 2020 23:45:00 GMT',
    title: 'Final Word/Watchmen Stream',
    subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>
  }];
  return day1.map((d, i) => (<TimelineElement {...d} id={`event-${i}`} />));
}

const Timeline = () => {
  return (
  <>
    <h1><a name="day1" href="none" className="schedule-link"> Day One </a></h1>
    <VerticalTimeline>
      {createTimelineElements()}  
    </VerticalTimeline>
    <h1><a name="day2" href="none" className="schedule-link"> Day Two </a></h1>
    <VerticalTimeline>
      {createSecondDayTimelineElements()}  
    </VerticalTimeline>
  </>
  );
};

export default Timeline;
