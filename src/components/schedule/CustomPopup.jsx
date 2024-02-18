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
            <div style={{padding:"5px 10px"}}>
                <h3 style={{fontWeight:"500", textAlign:"center"}}>{selectedDate && selectedDate.toDateString()}</h3>
                <p>Pickup: </p>
                <p>Dropoff: </p>
                <div style={{margin:"10px", padding:"5px 0px", borderRadius:"8px"}} className="btn btn-primary" onClick={onClose}>Close</div>
            </div>
        </Popup>
    );
};

export default CustomPopup;