import React from 'react';
import '../styles/TrackButton.css';

function TrackButton({ handleButtonClick, loading }) {
    return (
        <div className="track-button-container">
            <button
                className={`track-button ${ loading ? 'loading' : ''}`}
                onClick={() => handleButtonClick()}
            >
                Track
            </button>
        </div>
    );
}

export default TrackButton;