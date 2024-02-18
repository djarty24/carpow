import React from 'react'
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
      <button type="button" class="btn btn-outline-primary">Book Now!</button>
    </div>
  )
}

export default Book