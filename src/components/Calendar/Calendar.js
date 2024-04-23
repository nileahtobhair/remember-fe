import React from "react";
import "./calendar.css";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

let Basic = ({ localizer, events, date, onNavigate }) => (
  <Calendar
    events={events}
    views={["month", "week"]}
    showMultiDayTimes
    date={date}
    localizer={localizer}
    selectable={true}
    onNavigate={onNavigate}
    // max={new Date(2025, 1, 1)}
  />
);

function EventCalendar({ events, onNavigate, date }) {
  return (
    <>
      <div className="calendar--container">
        <h4> Your events calendar </h4>
        <div className="calendar">
          <Basic
            localizer={localizer}
            events={events}
            onNavigate={onNavigate}
            date={date}
          />
        </div>
      </div>
    </>
  );
}

export default EventCalendar;