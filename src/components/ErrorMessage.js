import React from 'react';
import '../styles/IntroMessage.css';

function ErrorMessage() {
    return (
        <div className="intro-message-container">
            <div className="intro-message">
                <text className="intro-message-title">
                    Error retrieving data. Please try again.
                </text>
                <text className="intro-message-text">
                {/* Our AI-powered tool analyzes recent tweets, offering a visual representation of emotions and their intensity. With this information, gain insight into the prevailing emotions associated with your query, presented in an easy-to-understand format */}
                </text>
                <text className="intro-message-text">
                    
                </text>
            </div>
        </div>
    );
}

export default ErrorMessage;