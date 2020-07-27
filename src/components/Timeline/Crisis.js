import React from 'react';
import TimelineElement from './TimelineElement';
import ChannelImage from './ChannelImage';

const CRISIS_DAY_ONE = [{
  from: 'Sat, 25 Jul 2020 07:00:00 GMT-0400',
  to: 'Sat, 25 Jul 2020 09:00:00 GMT-0400',
  title: 'The Nickatina Show w/ Krypton Caged',
  subtitle: 'Sean Maher, Danielle Cares, Scott Fowler & Ascended Ancient',
  description: <>
    <ChannelImage name='TheNickatinaShow' />
  </>
},{
  from: 'Sat, 25 Jul 2020 09:00:00 GMT-0400',
  to: 'Sat, 25 Jul 2020 12:00:00 GMT-0400',
  title: '4Nerds w/ Subjective Reviews',
  subtitle: 'Ft Robert Mayer Burnett',
  description: <>Hosted by: Nerdy in Many ways
    <div>
      <ChannelImage name='4Nerds' />
      <ChannelImage name='SubjectiveReviews' />
    </div>
  </>
}, {
  from: 'Sat, 25 Jul 2020 13:00:00 GMT-0400',
  to: 'Sat, 25 Jul 2020 14:45:00 GMT-0400',
  title: 'Fatal Jay & Film Gob',
  subtitle: 'Ft Abu Nas, Ryan Kinel, Lethal Lightening and Steph Anie',
  description: <>
    <ChannelImage name='FatalJay' />
    <ChannelImage name='FilmGob' />
  </>
}, {
  from: 'Sat, 25 Jul 2020 18:30:00 GMT-0400',
  to: 'Sat, 25 Jul 2020 20:30:00 GMT-0400',
  title: 'Dave The Film Junkee & Chris Wong',
  subtitle: 'Ft Victor Ku, Stephen Colbert & Scott McClellan',
  description: <>
    Begins right after Justice Con ends
    <div>
      <ChannelImage name='FilmJunkie' />
      <ChannelImage name='ChrisWong' />
    </div>
  </>
}, {
  from: 'Sat, 25 Jul 2020 20:30:00 GMT-0400',
  title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
  description: <>
    <ChannelImage name='ReelInMotion' />
  </>,
}];

const CRISIS_DAY_TWO = [{
  from: 'Sun, 26 Jul 2020 08:00:00 GMT-0400',
  to: 'Sun, 26 Jul 2020 09:00:00 GMT-0400',
  title: 'Louis Centeno Show & Anthony Sherfield',
  subtitle: 'Ft Daniel Rpk',
  description: <>
    Hosted by: Louis Centeno
    <div>
      <ChannelImage name='LouisCenteno' />
      <ChannelImage name='AnthonySherfield' />
    </div>
  </>
},{
  from: 'Sun, 26 Jul 2020 09:00:00 GMT-0400',
  to: 'Sun, 26 Jul 2020 12:15:00 GMT-0400',
  title: '4Nerds w/ The Nickatina Show',
  subtitle: 'Ft Robert Meyer Burnett, Scott Fowler & a surprise guGMT',
  description:  <>
    Hosted by: Nerdy in Many ways
    <div>
      <ChannelImage name='4Nerds' />
      <ChannelImage name='TheNickatinaShow' />
    </div>
  </>
}, {
  from: 'Sun, 26 Jul 2020 14:30:00 GMT-0400',
  to: 'Sun, 26 Jul 2020 16:15:00 GMT-0400',
  title: 'Fatal Jay & Film Gob',
  subtitle: 'Ft Abu Nas, Lord Kojay & Lady Jenevia',
  description: <>
    Hosted By: Film Gob
    <div>
      <ChannelImage name='FatalJay' />
      <ChannelImage name='FilmGob' />
    </div>
  </>
}, {
  from: 'Sun, 26 Jul 2020 18:30:00 GMT-0400',
  to: 'Sun, 26 Jul 2020 20:30:00 GMT-0400',
  title: 'Dave The Film Junkee & Chris Wong',
  description: <>
    <ChannelImage name='FilmJunkie' />
    <ChannelImage name='ChrisWong' />
  </>
}, {
  from: 'Sun, 26 Jul 2020 20:30:00 GMT-0400',
  to: 'Sun, 26 Jul 2020 22:00:00 GMT-0400',
  title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
  subtitle: 'Ft Comic Book Movie Marks',
  description: <>
  <ChannelImage name='ReelInMotion' />
  </>,
}, {
  from: 'Sun, 26 Jul 2020 22:00:00 GMT-0400',
  to: 'Sun, 27 Jul 2020 00:00:00 GMT-0400',
  title: 'Light Cast',
  subtitle: 'Ft The Cultured Nerd',
  description: <>
    <ChannelImage name='LightCast' />
  </>
}];

const createCrisisElements = (day) => {
  const eventData = day === 1 ? CRISIS_DAY_ONE : CRISIS_DAY_TWO;
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

export {
  CRISIS_DAY_ONE,
  CRISIS_DAY_TWO,
  createCrisisElements,
};