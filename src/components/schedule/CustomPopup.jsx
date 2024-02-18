import React from 'react';
import Popup from 'reactjs-popup';
import './CustomPopup.jsx'

const CustomPopup = ({ selectedDate, onClose }) => {
    return (
        <Popup
            open={selectedDate !== null}
            closeOnDocumentClick
            onClose={onClose}
        >
            <div>
                <p>{selectedDate && selectedDate.toDateString()}</p>
                <button onClick={onClose}>Close Popup</button>
            </div>
        </Popup>
    );
};

export default CustomPopup;