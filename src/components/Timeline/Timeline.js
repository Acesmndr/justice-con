import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { createCrisisElements } from './Crisis';
import { createJusticeConElements } from './JusticeCon';

const Timeline = ({crisis}) => {
  if (crisis) {
    return (
      <>
        <h1><a name="day1" href="none" className="schedule-link"> Day One </a></h1>
        <VerticalTimeline>
          {createCrisisElements(1)}  
        </VerticalTimeline>
        <h1><a name="day2" href="none" className="schedule-link"> Day Two </a></h1>
        <VerticalTimeline>
          {createCrisisElements(2)}  
        </VerticalTimeline>
      </>
    );
  }
  return (
    <>
      <h1><a name="day1" href="none" className="schedule-link"> Day One </a></h1>
      <VerticalTimeline>
        {createJusticeConElements(1)}  
      </VerticalTimeline>
      <h1><a name="day2" href="none" className="schedule-link"> Day Two </a></h1>
      <VerticalTimeline>
        {createJusticeConElements(2)}  
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
