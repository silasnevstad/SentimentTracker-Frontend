import React from 'react';
import '../styles/InputField.css';
import Input from './Input';
import TrackButton from './TrackButton';

function InputField({ text, setText, handleButtonClick }) {
    return (
        <div className="inputfield-container">
            <Input text={text} setText={setText} />
            <TrackButton handleButtonClick={handleButtonClick} />
        </div>
    );
}

export default InputField;