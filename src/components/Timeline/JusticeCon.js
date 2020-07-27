import React from 'react';
import LinkElement from './LinkElement';
import TimelineElement from './TimelineElement';

const JC_DAY_ONE = [{
  from: 'Sat, 25 Jul 2020 15:30:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 15:45:00 GMT+0100',
  title: 'Introduction to Justice Con',
  link: 'https://www.youtube.com/watch?v=ZOamhFnQaHU',
  subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>,
},{
  from: 'Sat, 25 Jul 2020 16:00:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 16:45:00 GMT+0100',
  title: 'Ink To The People',
  link: 'https://www.youtube.com/watch?v=xB4ZClEsL-M',
  subtitle: <>Todd Richheimer, <LinkElement title='inktothepeople' /></>,
}, {
  from: 'Sat, 25 Jul 2020 17:00:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 18:00:00 GMT+0100',
  title: 'Spotlight on Ray Porter',
  link: 'https://www.youtube.com/watch?v=Dl4C4-bMESk',
  subtitle: <LinkElement title='Ray__Porter' />
}, {
  from: 'Sat, 25 Jul 2020 18:15:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 19:15:00 GMT+0100',
  title: 'American Foundation For Suicide Prevention',
  link: 'https://www.youtube.com/watch?v=8fpu8jaKkkM',
  subtitle: <LinkElement title='afspnational' />
}, {
  from: 'Sat, 25 Jul 2020 19:45:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 20:45:00 GMT+0100',
  title: 'Spotlight on Jay Oliva',
  link: 'https://www.youtube.com/watch?v=U-QUwCfzx2c',
  subtitle: <LinkElement title='jayoliva1' />
}, {
  from: 'Sat, 25 Jul 2020 21:00:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 22:15:00 GMT+0100',
  title: 'Spotlight on Ray Fisher',
  link: 'https://www.youtube.com/watch?v=8lMIZmmYkH8',
  subtitle: <LinkElement title='ray8fisher' />
}, {
  from: 'Sat, 25 Jul 2020 22:30:00 GMT+0100',
  to: 'Sat, 25 Jul 2020 23:30:00 GMT+0100',
  title: 'Spotlight on Zack Snyder',
  link: 'https://www.youtube.com/watch?v=g_Kg6Cxwn18',
  subtitle: <LinkElement title='ZackSnyder' />
}];

const JC_DAY_TWO = [{
  from: 'Sun, 26 Jul 2020 14:45:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 15:45:00 GMT+0100',
  title: 'Spotlight on Fabian Wagner',
  link: '',
  subtitle: 'Fabian Wagner',
},{
  from: 'Sun, 26 Jul 2020 16:00:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 17:00:00 GMT+0100',
  title: 'Clay Enos and Kristine Cabanban',
  link: 'https://www.youtube.com/watch?v=ftTyNdNfja4',
  subtitle: <><LinkElement title='ClayEnos' /> & Kristine Cabanban</>,
}, {
  from: 'Sun, 26 Jul 2020 17:15:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 18:15:00 GMT+0100',
  title: 'Deborah Snyder and Snyder\'s Amazons',
  link: 'https://www.youtube.com/watch?v=zX2_l4jaUE8',
  subtitle: <>Deborah Snyder, <LinkElement title='CaresDaniella' />, <LinkElement title='ChicCattLady2' /> & <LinkElement title='FuriesNah' /></>
}, {
  from: 'Sun, 26 Jul 2020 18:30:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 19:30:00 GMT+0100',
  title: 'Diversity in Zack Snyder\'s films',
  link: 'https://www.youtube.com/watch?v=IYKAMea5jHk',
  subtitle: <><LinkElement title='nexuspong' />, <LinkElement title='SherazFarooqi_' /> & <LinkElement title='JonitaLDavis' /></>
}, {
  from: 'Sun, 26 Jul 2020 20:00:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 21:00:00 GMT+0100',
  title: 'Artists of #ReleaseTheSnyderCut',
  link: 'https://www.youtube.com/watch?v=dz5hDWbPdAk',
  subtitle: <><LinkElement title='mightypegasus88' />, <LinkElement title='BeaverMighty' />, <LinkElement title='Nimo5877' /> and <LinkElement title='Butterbarr' /></>
}, {
  from: 'Sun, 26 Jul 2020 21:15:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 22:30:00 GMT+0100',
  title: 'Sean O\'Connell & #ReleaseTheSnyderCut Book',
  link: 'https://www.youtube.com/watch?v=st4J7-ziggk',
  subtitle: <LinkElement title='Sean_OConnell' />
}, {
  from: 'Sun, 26 Jul 2020 22:45:00 GMT+0100',
  to: 'Sun, 26 Jul 2020 23:45:00 GMT+0100',
  title: 'Final Word/Watchmen Stream',
  link: 'https://www.youtube.com/watch?v=Yytmq0iF3qg',
  subtitle: <><LinkElement title='Ya_GirlMeg' /> & <LinkElement title='TheNerdQueens' /></>
}];

const createJusticeConElements = (day) => {
  const eventData = day === 1 ? JC_DAY_ONE : JC_DAY_TWO;
  return eventData.map((d, i) => (<TimelineElement {...d} key={`event-${i}`} />));
}

export {
  JC_DAY_ONE,
  JC_DAY_TWO,
  createJusticeConElements,
};
