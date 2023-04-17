import React from 'react';
import '../styles/Switcher.css';

function Switcher({ filter, setFilter }) {

    const handleSwitchToggle = (e) => {
        setFilter(e.target.checked ? 'precision' : 'turbo');
    };

    return (
        <div className="switch-container">
            <text
                className={`switch-text-all ${
                    filter === 'turbo' ? 'selected' : ''
                }`}
            >
                Turbo
            </text>

            <label className="switch">
                <input
                    type="checkbox"
                    className="chk"
                    onChange={handleSwitchToggle}
                    checked={filter === 'precision'}
                />
                <span className="slider"></span>
            </label>

            <text
                className={`switch-text ${
                    filter === 'precision' ? 'selected' : ''
                }`}
            >
                Precision
            </text>
        </div>
    );
}

export default Switcher;
