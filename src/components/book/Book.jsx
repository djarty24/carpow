import React from "react";
import { Link } from 'react-router-dom'
import "./Book.css";

const Book = () => {
  return (
    <div className="book">
      <h1>Sign Up For A Slot</h1>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <a href="#">Work &dtrif;</a>
        <ul>
          <li>
            <a href="#">Web Development</a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Illustration</a>
          </li>
          <li>
            <a href="#">Iconography</a>
          </li>
        </ul>
      </div>
      <button>Book Now!</button>
    </div>
  );
};

export default Book;
