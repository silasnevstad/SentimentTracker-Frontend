import React, { useState } from 'react';
import '../styles/Switcher.css';

function Switcher({ filter, setFilter }) {

    const handleSwitchToggle = (e) => {
        setFilter(e.target.checked ? 'recent' : 'all');
    };

    return (
        <div className="switch-container">
            <text
                className={`switch-text-all ${
                    filter === 'all' ? 'selected' : ''
                }`}
            >
                All
            </text>

            <label className="switch">
                <input
                    type="checkbox"
                    className="chk"
                    onChange={handleSwitchToggle}
                    checked={filter === 'recent'}
                />
                <span className="slider"></span>
            </label>

            <text
                className={`switch-text ${
                    filter === 'recent' ? 'selected' : ''
                }`}
            >
                Recent
            </text>
        </div>
    );
}

export default Switcher;
