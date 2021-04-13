import React from 'react';
import TimelineElement from './TimelineElement';

const JC_DAY_ONE = [{
  from: 'Fri, 16 Apr 2021 06:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 07:45:00 GMT-0400',
  title: 'Art For Everyone And Anything',
  link: '',
  hosts: ['Michael Grinberg'],
  guests: [],
},{
  from: 'Fri, 16 Apr 2021 07:45:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 08:30:00 GMT-0400',
  title: 'Green Lantern: Jessica Cruz - From Panel to Screen',
  link: '',
  hosts: ['Kevin Dawson'],
  guests: ['Alicia Nava', 'Jakeb Lowery', 'Karla Zamora', 'Darin Martin'],
}, {
  from: 'Fri, 16 Apr 2021 08:30:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 09:00:00 GMT-0400',
  title: 'Making the BvS Kryptonite Spear',
  link: '',
  hosts: ['Bat-Mike'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 09:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 09:30:00 GMT-0400',
  title: 'Creation of Knightmare Joker',
  link: '',
  hosts: ['Robi Midiri'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 09:30:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 10:00:00 GMT-0400',
  title: 'Lights, Camera, Action!',
  link: '',
  hosts: ['Flow Arts', 'Fight Craft'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 10:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 10:45:00 GMT-0400',
  title: 'Anatomy of Recognition: Typography',
  link: '',
  hosts: ['Ian Griffen'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 10:45:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 11:15:00 GMT-0400',
  title: 'Fan Editing: 101',
  link: '',
  hosts: ['AListProductions'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 11:15:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 12:00:00 GMT-0400',
  title: 'How To Make a Film',
  link: '',
  hosts: ['Steve Kasan'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 12:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 13:30:00 GMT-0400',
  title: 'Artists League International',
  link: '',
  hosts: ['SupesBatsy', 'MekareMadness', 'RazanulHoque', 'RymSlim'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 13:30:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 14:45:00 GMT-0400',
  title: 'The Power of Snyderverse: Restoring Mental Health',
  link: '',
  hosts: ['Matteo DG @TheFusioner'],
  guests: ['Jax (@MnMJax)', 'Darius (@mockingjaygrimes)'],
}, {
  from: 'Fri, 16 Apr 2021 14:45:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 16:00:00 GMT-0400',
  title: 'Let\'s Make an Amazon Tiara Together and Talk Cosplay',
  link: '',
  hosts: ['Lis Wonder', 'Adi Rodrigues', 'Susie Creates'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 16:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 17:00:00 GMT-0400',
  title: 'Martian Manhunter Fan Film Costume Commentary',
  link: '',
  hosts: ['Twins of Destruction'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 17:00:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 18:45:00 GMT-0400',
  title: 'Working With EVA Foam',
  link: '',
  hosts: ['Julie Whiteley'],
  guests: [],
}, {
  from: 'Fri, 16 Apr 2021 18:45:00 GMT-0400',
  to: 'Fri, 16 Apr 2021 19:45:00 GMT-0400',
  title: 'How to Join a Zoom Meeting as an Animated Character',
  link: '',
  hosts: ['David Jones'],
  guests: [],
}];

const JC_DAY_TWO = [{
  from: 'Sat, 17 Apr 2021 10:00:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 11:00:00 GMT-0400',
  title: '"Anyone Can Cosplay" A Discussion On Cosplay Accuracy And Acceptance',
  link: '',
  hosts: ['Cole Queen'],
  guests: ['Lis Wonder', 'Kay Kosplay', 'Colleen Cosplay', 'Hijabi Hooligan Cosplay'],
},{
  from: 'Sat, 17 Apr 2021 11:30:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 12:30:00 GMT-0400',
  title: 'Spotlight on Victor Ku',
  link: '',
  hosts: ['Dave Avery'],
  guests: ['Victor Ku'],
}, {
  from: 'Sat, 17 Apr 2021 12:45:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 13:45:00 GMT-0400',
  title: 'Spotlight on Ray Porter',
  link: '',
  hosts: ['Sheraz Farooqi'],
  guests: ['Ray Porter'],
}, {
  from: 'Sat, 17 Apr 2021 14:00:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 15:00:00 GMT-0400',
  title: 'Spotlight on Ray Fisher',
  link: '',
  hosts: ['Chris Wong-Swenson'],
  guests: ['Ray Fisher'],
}, {
  from: 'Sat, 17 Apr 2021 15:15:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 16:15:00 GMT-0400',
  title: 'Spotlight on Joe Manganiello',
  link: '',
  hosts: ['The Film Junkee'],
  guests: ['Joe Manganiello'],
}, {
  from: 'Sat, 17 Apr 2021 16:30:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 17:30:00 GMT-0400',
  title: 'Spotlight on Harry J. Lennix',
  link: '',
  hosts: ['Scott McClellan'],
  guests: ['Harry J. Lennix'],
}, {
  from: 'Sat, 17 Apr 2021 17:45:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 18:45:00 GMT-0400',
  title: 'Spotlight on Patrick Tatopoulos',
  link: '',
  hosts: ['Enosh Fee'],
  guests: ['Patrick Tatopoulos'],
}, {
  from: 'Sat, 17 Apr 2021 19:00:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 20:00:00 GMT-0400',
  title: 'Deep Dive Into Zack Snyder\'s Justice League With Zack Snyder',
  link: '',
  hosts: ['The Nerd Queens', 'Wonder Meg'],
  guests: ['Zack Snyder'],
}, {
  from: 'Sat, 17 Apr 2021 20:30:00 GMT-0400',
  to: 'Sat, 17 Apr 2021 21:30:00 GMT-0400',
  title: 'Spotlight on Jay Oliva',
  link: '',
  hosts: ['Tim Yoko'],
  guests: ['Jay Oliva'],
}];

const JC_DAY_THREE = [{
  from: 'Sun, 18 Apr 2021 11:00:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 12:00:00 GMT-0400',
  title: 'Spotlight on American Foundation for Suicide Prevention',
  link: '',
  hosts: ['Wonder Meg'],
  guests: ['Ashly Alberto', 'Doreen Marshall Ph.D.'],
}, {
  from: 'Sun, 18 Apr 2021 12:15:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 13:15:00 GMT-0400',
  title: 'Women Behind The Scenes Of Army of the Dead',
  link: '',
  hosts: ['Nana Queen'],
  guests: ['Dody Dorn', 'Misha Bukowski', 'Stephanie Porter', 'Julie Berghoff'],
}, {
  from: 'Sun, 18 Apr 2021 13:30:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 14:30:00 GMT-0400',
  title: 'Spotlight on Women From Army of the Dead',
  link: '',
  hosts: ['The Nerd Queens', 'Wonder Meg'],
  guests: ['Ella Purnell', 'Ana de la Reguera', 'Nora Arnezeder', 'Tig Notaro', 'Huma S. Qureshi', 'Samantha Win'],
}, {
  from: 'Sun, 18 Apr 2021 14:45:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 15:45:00 GMT-0400',
  title: 'Spotlight on Deborah Snyder',
  link: '',
  hosts: ['Fatma Sawalim'],
  guests: ['Debbie Snyder'],
}, {
  from: 'Sun, 18 Apr 2021 17:30:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 18:00:00 GMT-0400',
  title: 'Spotlight on Dave Bautista',
  link: '',
  hosts: ['Enosh Fee'],
  guests: ['Dave Bautista'],
}, {
  from: 'Sun, 18 Apr 2021 18:30:00 GMT-0400',
  to: 'Sun, 18 Apr 2021 19:30:00 GMT-0400',
  title: 'Spotlight on Army of the Dead with Zack Snyder',
  link: '',
  hosts: ['Scott McClellan', 'Tim Yoko'],
  guests: ['Zack Snyder'],
}];

const createJusticeConElements = (day) => {
  let eventData = [];
  switch(day) {
    case 1:
      eventData = JC_DAY_ONE;
      break;
    case 2:
      eventData = JC_DAY_TWO;
      break;
    case 3:
      eventData = JC_DAY_THREE;
      break;
    default:
  }
  return eventData.map((d, i) => (<TimelineElement {...d} key={`event-${i}`} />));
}

export {
  JC_DAY_ONE,
  JC_DAY_TWO,
  JC_DAY_THREE,
  createJusticeConElements,
};
