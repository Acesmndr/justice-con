import React from 'react';
import TimelineElement from './TimelineElement';

const ChannelImage = ({name}) => {
  return <div className="channel-wrapper"><img src={require(`../../logos/${name}.jpg`)} className='channel-logo' alt={name} /></div>
}

const createCrisisDay1Elements = () => {
  const eventData = [{
    from: 'Sat, 25 Jul 2020 07:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 09:00:00 EST-0400',
    title: 'The Nickatina Show w/ Krypton Caged',
    subtitle: 'Sean Maher, Danielle Cares & Scott Fowler',
    description: <>
      <ChannelImage name='TheNickatinaShow' />
    </>
  },{
    from: 'Sat, 25 Jul 2020 09:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 12:00:00 EST-0400',
    title: '4Nerds w/ Subjective Reviews',
    subtitle: 'Ft Robert Mayer Burnett',
    description: <>Hosted by: Nerdy in Many ways
      <div>
        <ChannelImage name='4Nerds' />
        <ChannelImage name='SubjectiveReviews' />
      </div>
    </>
  }, {
    from: 'Sat, 25 Jul 2020 13:00:00 EST-0400',
    to: 'Sat, 25 Jul 2020 14:45:00 EST-0400',
    title: 'Fatal Jay & Film Gob',
    subtitle: 'Ft Abu Nas',
    description: <>
      <ChannelImage name='FatalJay' />
      <ChannelImage name='FilmGob' />
    </>
  }, {
    from: 'Sat, 25 Jul 2020 18:30:00 EST-0400',
    to: 'Sat, 25 Jul 2020 20:30:00 EST-0400',
    title: 'Dave The Film Junkee & Chris Wong',
    subtitle: 'Ft Victor Ku, Stephen Colbert and Scott McClellan',
    description: <>
      Begins right after Justice Con ends
      <div>
        <ChannelImage name='FilmJunkie' />
      </div>
    </>
  }, {
    from: 'Sat, 25 Jul 2020 20:30:00 EST-0400',
    title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
    subtitle: 'Ft Reel Anarchy',
    description: <>
    <ChannelImage name='ReelInMotion' />
    </>,
  }];
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

const createCrisisDay2Elements = () => {
  const eventData = [{
    from: 'Sun, 26 Jul 2020 08:00:00 EST-0400',
    to: 'Sun, 26 Jul 2020 09:00:00 EST-0400',
    title: 'Luis Centeno Show',
    subtitle: 'Ft Daniel Rpk',
    description: <>
      <ChannelImage name='LuisCenteno' />
    </>
  },{
    from: 'Sun, 26 Jul 2020 09:00:00 EST-0400',
    to: 'Sun, 26 Jul 2020 12:15:00 EST-0400',
    title: '4Nerds w/ The Nickatina Show',
    subtitle: 'Ft Robert Meyer Burnett',
    description:  <>
      Hosted by: Nerdy in Many ways
      <div>
        <ChannelImage name='4Nerds' />
        <ChannelImage name='TheNickatinaShow' />
      </div>
    </>
  }, {
    from: 'Sun, 26 Jul 2020 14:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 16:15:00 EST-0400',
    title: 'Fatal Jay & Film Gob',
    subtitle: 'Ft Abu Nas',
    description: <>
      <ChannelImage name='FatalJay' />
      <ChannelImage name='FilmGob' />
    </>
  }, {
    from: 'Sun, 26 Jul 2020 18:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 20:30:00 EST-0400',
    title: 'Dave The Film Junkee & Chris Wong',
    description: <>
      <ChannelImage name='FilmJunkie' />
    </>
  }, {
    from: 'Sun, 26 Jul 2020 20:30:00 EST-0400',
    to: 'Sun, 26 Jul 2020 22:00:00 EST-0400',
    title: 'Reel in Motion with Ben Evertz and John Arryn Garza',
    description: <>
    <ChannelImage name='ReelInMotion' />
    </>,
  }, {
    from: 'Sun, 26 Jul 2020 22:00:00 EST-0400',
    title: 'Light Cast',
    subtitle: 'Ft The Cultured Nerd',
    description: <>
      <ChannelImage name='LightCast' />
    </>
  }];
  return eventData.map((d, i) => (<TimelineElement crisis={true} {...d} key={`event-${i}`} />));
}

export {
  createCrisisDay1Elements,
  createCrisisDay2Elements,
};
