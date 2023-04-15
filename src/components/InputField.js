import React from 'react';
import '../styles/InputField.css';
import Input from './Input';
import TrackButton from './TrackButton';

function InputField({ text, setText, handleButtonClick, loading }) {
    return (
        <div className="inputfield-container">
            <Input text={text} setText={setText} loading={loading} />
            <TrackButton handleButtonClick={handleButtonClick} loading={loading} />
        </div>
    );
}

export default InputField;