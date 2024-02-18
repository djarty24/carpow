import React from "react";
import { Link } from 'react-router-dom'
import "./Book.css";

const Book = () => {
  return (
    <div className="book">
      <h1>Sign Up For A Slot</h1>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <button>Book Now!</button>
    </div>
  );
};

export default Book;
