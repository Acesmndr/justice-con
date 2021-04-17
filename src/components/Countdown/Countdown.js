import React from "react";
import moment from "moment";
import "./index.scss";
import Timeline from "../Timeline/Timeline";
import CurrentlyRunning from "../Timeline/CurrentRunning";
import Countup from "../Countup/Countup";

const Countdown = ({ forDate, toDate }) => {
  const intervalRef = React.useRef(null);
  const [days, setDays] = React.useState(undefined);
  const [hours, setHours] = React.useState(undefined);
  const [minutes, setMinutes] = React.useState(undefined);
  const [seconds, setSeconds] = React.useState(undefined);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const til = moment(forDate);
      const now = moment();
      if (til.diff(now, "seconds") < 0) {
        // clear interval when time is reached
        clearInterval(intervalRef.current);
      }
      const days = til.diff(now, "days");
      now.add(days, "days");
      const hours = til.diff(now, "hours");
      now.add(hours, "hours");
      const minutes = til.diff(now, "minutes");
      now.add(minutes, "minutes");
      const seconds = til.diff(now, "seconds");
      setDays(days || "0");
      setHours(hours || "0");
      setMinutes(minutes || "0");
      setSeconds(seconds || "0");
    }, 1000);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [forDate]);

  if (moment(forDate).diff(moment(), "seconds") < 0) {
    if (moment(toDate).diff(moment(), "seconds") < 0) {
      return <Countup toDate={toDate} />;
    }
    return (
      <div style={{ width: "80vw" }}>
        <div className="countdown-div">
          <img
            className="logo"
            src={require("../../justicecon.png")}
            alt="logo "
          />
          <div className="countdown-wrapper">
            <>
              <CurrentlyRunning />
            </>
          </div>
          <h3>
            <a className="schedule-link" href="#day1">
              Apr 16
            </a>
            <a className="schedule-link" href="#day2">
              {" "}
              -{" "}
            </a>
            <a className="schedule-link" href="#day3">
              18, 2021
            </a>
          </h3>
          <div>
            <a
              data-tip="Jump to first day schedule"
              className="schedule-link-pin"
              href="#day1"
            >
              1
            </a>
            <a
              data-tip="Jump to second day schedule"
              className="schedule-link-pin"
              href="#day2"
            >
              2
            </a>
            <a
              data-tip="Jump to third day schedule"
              className="schedule-link-pin"
              href="#day3"
            >
              3
            </a>
          </div>
          <h1 className="arrow">↓</h1>
        </div>
        <Timeline />
      </div>
    );
  }

  return (
    <div style={{ width: "80vw" }}>
      <div className="countdown-div">
        <img
          className="logo"
          src={require("../../justicecon.png")}
          alt="logo "
        />
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              {days} <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              {hours} <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              {minutes} <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              {seconds} <span>seconds</span>
            </div>
          )}
        </div>
        <h3>
          <a className="schedule-link" href="#day1">
            Apr 16
          </a>
          <a className="schedule-link" href="#day2">
            {" "}
            -{" "}
          </a>
          <a className="schedule-link" href="#day3">
            18, 2021
          </a>
        </h3>
        <div>
          <a
            data-tip="Jump to first day schedule"
            className="schedule-link-pin"
            href="#day1"
          >
            1
          </a>
          <a
            data-tip="Jump to second day schedule"
            className="schedule-link-pin"
            href="#day2"
          >
            2
          </a>
          <a
            data-tip="Jump to third day schedule"
            className="schedule-link-pin"
            href="#day3"
          >
            3
          </a>
        </div>
        <h1 className="arrow">↓</h1>
      </div>
      <Timeline />
    </div>
  );
};

export default Countdown;
