import React from 'react';
import TimelineElement from './TimelineElement';

const createCrisisDay1Elements = () => {
  const eventData = [{
    from: 'Sat, 25 Jul 2020 07:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 09:00:00 EST-0400',
    title: 'The Nickatina Show w/ Krypton Caged',
    subtitle: 'Sean Maher, Danielle Cares & Scott Fowler',
  },{
    from: 'Sat, 25 Jul 2020 09:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 12:00:00 EST-0400',
    title: '4Nerds w/ Subjective Reviews',
    subtitle: 'Ft Robert Mayer Burnett',
    description: 'Hosted by: Nerdy in Many ways'
  }, {
    from: 'Sat, 25 Jul 2020 13:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 14:45:00 EST-0400',
    title: 'Fatal Jay & Film Gob',
    subtitle: 'Ft Abu Nas'
  }, {
    from: 'Sat, 25 Jul 2020 18:30:00 EST-0400',
    to: 'Sat, 25 Jul 2020 20:30:00 EST-0400',
    title: 'Dave The Film Junkee & Chris Wong',
    subtitle: 'Ft Victor Ku, Stephen Colbert and Scott McClellan',
    description: 'Begins right after Justice Con ends',
  }, {
    from: 'Sat, 25 Jul 2020 20:30:00 EST-0400',
    title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
    subtitle: 'Ft Reel Anarchy'
  }];
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

const createCrisisDay2Elements = () => {
  const eventData = [{
    from: 'Sun, 26 Jul 2020 08:00:00 EST-0400',
    to: 'Sun, 26 Jul 2020 09:00:00 EST-0400',
    title: 'Luis Centeno Show',
    subtitle: 'Ft Daniel Rpk',
  },{
    from: 'Sun, 26 Jul 2020 09:00:00 EST-0400',
    to: 'Sun, 26 Jul 2020 12:15:00 EST-0400',
    title: '4Nerds w/ The Nickatina Show',
    subtitle: 'Ft Robert Meyer Burnett',
    description: 'Hosted by: Nerdy in Many ways'
  }, {
    from: 'Sun, 26 Jul 2020 14:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 16:15:00 EST-0400',
    title: 'Fatal Jay & Film Gob',
    subtitle: 'Ft Abu Nas'
  }, {
    from: 'Sun, 26 Jul 2020 18:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 20:30:00 EST-0400',
    title: 'Dave The Film Junkee & Chris Wong',
  }, {
    from: 'Sun, 26 Jul 2020 20:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 22:00:00 EST-0400',
    title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
  }, {
    from: 'Sun, 26 Jul 2020 22:00:00 EST-0400',
    title: 'Light Cast',
    subtitle: 'Ft The Cultured Nerd'
  }];
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

export {
  createCrisisDay1Elements,
  createCrisisDay2Elements,
};
