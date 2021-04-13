import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { createJusticeConElements } from './JusticeCon21';

const Timeline = () => {
  return (
    <>
      <h1><a name="day1" href="#day1" className="schedule-link"> Day One </a></h1>
      <VerticalTimeline>
        {createJusticeConElements(1)}  
      </VerticalTimeline>
      <h1><a name="day2" href="#day2" className="schedule-link"> Day Two </a></h1>
      <VerticalTimeline>
        {createJusticeConElements(2)}  
      </VerticalTimeline>
      <h1><a name="day3" href="#day3" className="schedule-link"> Day Three </a></h1>
      <VerticalTimeline>
        {createJusticeConElements(3)}  
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
