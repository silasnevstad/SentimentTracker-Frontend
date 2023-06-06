import React from 'react';
import '../styles/IntroMessage.css';

function IntroMessage() {
    return (
        <div className="intro-message-container">
            <div className="intro-message">
                <p className="intro-message-title">
                    Explore real-time sentiment by entering a search term.
                </p>
                <p className="intro-message-text">
                {/* Our AI-powered tool analyzes recent tweets, offering a visual representation of emotions and their intensity. With this information, gain insight into the prevailing emotions associated with your query, presented in an easy-to-understand format */}
                    Uncover the emotions behind any topic using our AI-powered sentiment analysis tool. Harnessing real-time news headlines, Twitter tweets and Reddit posts, we reveal an engaging snapshot, letting you grasp the emotions and intensity tied to your search query.
                </p>
            </div>
        </div>
    );
}

export default IntroMessage;