import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Schedule.css";
import Calendar from "react-calendar";

const Schedule = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <Calendar />
      <div class="weekOne"></div>
    </div>
  );
};

export default Schedule;
