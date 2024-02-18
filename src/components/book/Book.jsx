import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="book">
      <h1>Sign Up For A Slot</h1>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-outline-primary">
        Book Now!
      </button>
    </div>
  );
};

export default Book;
