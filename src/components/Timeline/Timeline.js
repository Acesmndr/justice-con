import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { createJusticeConDay1Elements, createJusticeConDay2Elements } from './JusticeCon';


const Timeline = () => {
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
