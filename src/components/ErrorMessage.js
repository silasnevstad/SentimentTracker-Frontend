import React from 'react';
import '../styles/IntroMessage.css';

function ErrorMessage() {
    return (
        <div className="intro-message-container">
            <div className="intro-message">
                <p className="intro-message-title">
                    No sources found for this query. Please try again.
                </p>
                <p className="intro-message-text">
                {/* Our AI-powered tool analyzes recent tweets, offering a visual representation of emotions and their intensity. With this information, gain insight into the prevailing emotions associated with your query, presented in an easy-to-understand format */}
                </p>
                <p className="intro-message-text">
                    
                </p>
            </div>
        </div>
    );
}

export default ErrorMessage;