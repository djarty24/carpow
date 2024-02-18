import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import { useState } from "react";

const Book = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="book">
      <h1>Sign Up For A Slot</h1>
      <h3>Time:</h3>
      <div class="dropdown">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option>Select an Option...</option>
          <option value="pickUp">Pick Up</option>
          <option value="dropOff">Drop Off</option>
        </select>
      </div>
      <h3>Information:</h3>
      <ul>
        <li>Driver: {selectedOption == "pickUp" ? "Ms.Clark" : "Mr.Smith"}</li>
        <li>Car: {selectedOption == "pickUp" ? "Honda" : "Toyota"}</li>
        <li>Time: {selectedOption == "pickUp" ? "8:15 am" : "3:50 pm"}</li>
      </ul>
      <img src="bookpage.png"></img>
      <button
        onClick={() => {
          alert("Slot booked successfully!");
        }}
      >
        Book Now!
      </button>
      <Link to="/schedule">
        <button class="back">Back</button>
      </Link>
    </div>
  );
};

export default Book;
