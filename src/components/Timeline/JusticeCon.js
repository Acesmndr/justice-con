import React from 'react';
import LinkElement from './LinkElement';
import TimelineElement from './TimelineElement';

const createJusticeConDay1Elements = () => {
  const eventData = [{
    from: 'Sat, 25 Jul 2020 15:30:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 15:45:00 GMT+0100',
    title: 'Introduction to Justice Con',
    subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>,
  },{
    from: 'Sat, 25 Jul 2020 16:00:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 16:45:00 GMT+0100',
    title: 'Ink To The People',
    subtitle: <>Todd Richheimer, <LinkElement title='inktothepeople' /></>,
  }, {
    from: 'Sat, 25 Jul 2020 17:00:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 18:00:00 GMT+0100',
    title: 'Spotlight on Ray Porter',
    subtitle: <LinkElement title='Ray__Porter' />
  }, {
    from: 'Sat, 25 Jul 2020 18:15:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 19:15:00 GMT+0100',
    title: 'American Foundation For Suicide Prevention',
    subtitle: <LinkElement title='afspnational' />
  }, {
    from: 'Sat, 25 Jul 2020 19:45:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 20:45:00 GMT+0100',
    title: 'Spotlight on Jay Oliva',
    subtitle: <LinkElement title='jayoliva1' />
  }, {
    from: 'Sat, 25 Jul 2020 21:00:00 GMT+0100',
    to: 'Sat, 25 Jul 2020 22:15:00 GMT+0100',
    title: 'Spotlight on Ray Fisher',
    subtitle: <LinkElement title='ray8fisher' />
  }, {
    from: 'Sat, 25 Jul 2020 22:30:00 GMT+0100',
    title: 'Spotlight on Zack Snyder',
    subtitle: <LinkElement title='ZackSnyder' />
  }];
  return eventData.map((d, i) => (<TimelineElement {...d} key={`event-${i}`} />));
}

const createJusticeConDay2Elements = () => {
  const eventData = [{
    from: 'Sun, 26 Jul 2020 14:45:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 15:45:00 GMT+0100',
    title: 'Spotlight on Fabian Wagner',
    subtitle: 'Fabian Wagner',
  },{
    from: 'Sun, 26 Jul 2020 16:00:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 17:00:00 GMT+0100',
    title: 'Clay Enos and Kristine Cabanban',
    subtitle: <><LinkElement title='ClayEnos' /> & Kristine Cabanban</>,
  }, {
    from: 'Sun, 26 Jul 2020 17:15:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 18:15:00 GMT+0100',
    title: 'Deborah Snyder and Snyder\'s Amazons',
    subtitle: <>Deborah Snyder, <LinkElement title='CaresDaniella' />, <LinkElement title='ChicCattLady2' /> & <LinkElement title='FuriesNah' /></>
  }, {
    from: 'Sun, 26 Jul 2020 18:30:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 19:30:00 GMT+0100',
    title: 'Diversity in Zack Snyder\'s films',
    subtitle: <><LinkElement title='nexuspong' />, <LinkElement title='SherazFarooqi_' /> & <LinkElement title='JonitaLDavis' /></>
  }, {
    from: 'Sun, 26 Jul 2020 20:00:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 21:00:00 GMT+0100',
    title: 'Artists of #ReleaseTheSnyderCut',
    subtitle: <><LinkElement title='mightypegasus88' />, <LinkElement title='BeaverMighty' />, <LinkElement title='Nimo5877' /> and <LinkElement title='Butterbarr' /></>
  }, {
    from: 'Sun, 26 Jul 2020 21:15:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 22:30:00 GMT+0100',
    title: 'Sean O\'Connell & #ReleaseTheSnyderCut Book',
    subtitle: <LinkElement title='Sean_OConnell' />
  }, {
    from: 'Sun, 26 Jul 2020 22:45:00 GMT+0100',
    to: 'Sun, 26 Jul 2020 23:45:00 GMT+0100',
    title: 'Final Word/Watchmen Stream',
    subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>
  }];
  return eventData.map((d, i) => (<TimelineElement {...d} key={`event-${i}`} />));
}

export {
  createJusticeConDay1Elements,
  createJusticeConDay2Elements,
};
