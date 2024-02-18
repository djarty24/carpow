import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CustomPopup from "./CustomPopup";

import "./Schedule.css";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numWeeks, setNumWeeks] = useState(null);

  const date = new Date(2024, 2, 15);
  const { id } = useParams();
  let schedule = id.replace("-", " ");

  const getNumberOfWeeks = (date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
    const weeks = Math.ceil((firstDayOfMonth.getDay() + totalDaysInMonth) / 7);
    setNumWeeks(weeks);
  };

  const customWeekdayFormat = (locale, date) => {
    return ["S", "M", "T", "W", "T", "F", "S"][date.getDay()];
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getNumberOfWeeks(date);
  };

  const handleTileClick = (value) => {
    setSelectedDate(value);
  };

  const handleClosePopup = () => {
    setSelectedDate(null);
  };

  const getCurrentMonth = (date) => {
    const options = { month: "long" };
    return date.toLocaleDateString("en-US", options);
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
        tileClassName={({ date }) =>
          date === selectedDate ? "selected" : null
        }
        onClickDay={handleDateChange}
        nextButtonProps={{
          onClick: () =>
            handleDateChange(
              new Date(date.getFullYear, date.getMonth + 1, date.getDay)
            ),
        }}
        prevButtonProps={{
          onClick: () =>
            handleDateChange(
              new Date(date.getFullYear, date.getMonth + 1, date.getDay)
            ),
        }}
      />

      <CustomPopup selectedDate={selectedDate} onClose={handleClosePopup} />

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
        {numWeeks >= 5 && (
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
        {numWeeks >= 6 && (
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
