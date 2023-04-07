import React from 'react';
import '../styles/TrackButton.css';

function TrackButton({ handleButtonClick }) {
    return (
        <div className="track-button-container">
            <button
                className="track-button"
                onClick={() => handleButtonClick()}
            >
                Track
            </button>
        </div>
    );
}

export default TrackButton;