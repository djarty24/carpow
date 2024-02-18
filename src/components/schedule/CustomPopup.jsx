import React from "react";
import Popup from "reactjs-popup";
import "./CustomPopup.jsx";
import { Link } from "react-router-dom";
import "./CustomPopup.css";

const CustomPopup = ({ selectedDate, onClose }) => {
  return (
    <Popup open={selectedDate !== null} closeOnDocumentClick onClose={onClose}>
      <div>
        <p>{selectedDate && selectedDate.toDateString()}</p>
        <Link to="/book">
          <button class="popupButton">Book!</button>
        </Link>
        <button onClick={onClose} class="popupButton">
          Close Popup
        </button>
      </div>
    </Popup>
  );
};

export default CustomPopup;
