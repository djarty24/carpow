import React from "react";
import Calendar from "react-calendar";
import { Link, useParams } from "react-router-dom";

import "./Schedule.css";

const Schedule = () => {
  const date = new Date(2024, 2, 15);
  const { id } = useParams();
  let schedule = id.replace("-", " ");

  const getNumberOfWeeks = (date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
    const weeks = Math.ceil((firstDayOfMonth.getDay() + totalDaysInMonth) / 7);
    return weeks;
  };

  const customWeekdayFormat = (locale, date) => {
    return ["S", "M", "T", "W", "T", "F", "S"][date.getDay()];
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="schedule">
      <h1>
        {schedule}
        <br />
        Carpool Schedule
      </h1>
      <hr
        style={{
          border: "5px solid #F2F8F8",
          borderRadius: "5px",
          margin: "5px 25px",
        }}
      />
      <Calendar
        locale="en-US"
        formatShortWeekday={customWeekdayFormat}
        onChange={handleDateChange}
      />
      <hr
        style={{
          border: "5px solid #F2F8F8",
          borderRadius: "5px",
          margin: "5px 25px",
        }}
      />
      <div className="weeks">
        <div className="weeks-week">
          <div className="weeks-week-info">
            <div>
              <h4>Week 1</h4>
              <h6>1/29/24 - 2/2/24</h6>
            </div>
            <p>Slots Remaining</p>
          </div>
        </div>
        <div className="weeks-week">
          <div className="weeks-week-info">
            <div>
              <h4>Week 2</h4>
              <h6>1/29/24 - 2/2/24</h6>
            </div>
            <p>Full</p>
          </div>
        </div>
        <div className="weeks-week">
          <div className="weeks-week-info">
            <div>
              <h4>Week 3</h4>
              <h6>1/29/24 - 2/2/24</h6>
            </div>
            <p>Full</p>
          </div>
        </div>
        <div className="weeks-week">
          <div className="weeks-week-info">
            <div>
              <h4>Week 4</h4>
              <h6>1/29/24 - 2/2/24</h6>
            </div>
            <p>Slots Remaining</p>
          </div>
        </div>
        {getNumberOfWeeks(date) >= 5 && (
          <div className="weeks-week">
            <div className="weeks-week-info">
              <div>
                <h4>Week 5</h4>
                <h6>1/29/24 - 2/2/24</h6>
              </div>
              <p>Slots Remaining</p>
            </div>
          </div>
        )}
        {getNumberOfWeeks(date) >= 6 && (
          <div className="weeks-week">
            <div className="weeks-week-info">
              <div>
                <h4>Week 6</h4>
                <h6>1/29/24 - 2/2/24</h6>
              </div>
              <p>Slots Remaining</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
