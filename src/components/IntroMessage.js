import React from 'react';
import '../styles/IntroMessage.css';

function IntroMessage() {
    return (
        <div className="intro-message-container">
            <div className="intro-message">
                <text className="intro-message-title">
                    Explore real-time sentiment by entering a search term.
                </text>
                <text className="intro-message-text">
                {/* Our AI-powered tool analyzes recent tweets, offering a visual representation of emotions and their intensity. With this information, gain insight into the prevailing emotions associated with your query, presented in an easy-to-understand format */}
                🔍 Uncover the hidden emotions behind any topic using our AI-powered sentiment analysis tool. Harnessing real-time Twitter and Reddit data, we reveal an engaging visual snapshot 🎨, letting you grasp the emotions 😃😞😤 and intensity 🔥 tied to your search query.
                </text>
            </div>
        </div>
    );
}

export default IntroMessage;