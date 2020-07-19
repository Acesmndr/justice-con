import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { createCrisisDay1Elements, createCrisisDay2Elements } from './Crisis';
import { createJusticeConDay1Elements, createJusticeConDay2Elements } from './JusticeCon';


const Timeline = ({crisis}) => {
  if (crisis) {
    return (
      <>
        <h1><a name="day1" href="none" className="schedule-link"> Day One </a></h1>
        <VerticalTimeline>
          {createCrisisDay1Elements()}  
        </VerticalTimeline>
        <h1><a name="day2" href="none" className="schedule-link"> Day Two </a></h1>
        <VerticalTimeline>
          {createCrisisDay2Elements()}  
        </VerticalTimeline>
      </>
    );
  }
  return (
    <>
      <h1><a name="day1" href="none" className="schedule-link"> Day One </a></h1>
      <VerticalTimeline>
        {createJusticeConDay1Elements()}  
      </VerticalTimeline>
      <h1><a name="day2" href="none" className="schedule-link"> Day Two </a></h1>
      <VerticalTimeline>
        {createJusticeConDay2Elements()}  
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
