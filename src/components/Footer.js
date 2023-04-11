import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logos">
                <a href="http://www.reddit.com/" >
                    <img className="footer-img  reddit-icon" src={require('./images/redditLogo.png')} alt="reddit" />
                </a>
                <a href="http://www.twitter.com/" >
                    <img className="footer-img twitter-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                </a>
            </div>
            <div className="footer">  
                <text className="footer-text">Data from Twitter Tweets and Reddit Posts </text>
            </div>

        </div>
    );
}

export default Footer;