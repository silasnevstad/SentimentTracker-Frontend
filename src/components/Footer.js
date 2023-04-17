import React from 'react';
import '../styles/Footer.css';

function Footer({ setShowAboutModal, setShowContactModal }) {
    return (
        <div className="footer-container">
            <div className="footer-logos">
                <a href="http://www.reddit.com/" >
                    <img className="footer-img  reddit-icon" src={require('./images/redditLogo.png')} alt="reddit" />
                </a>
                <a href="http://www.twitter.com/" >
                    <img className="footer-img twitter-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                </a>
                <a href="https://newsapi.org/" >
                    <img className="footer-img news-icon" src={require('./images/newsIcon.png')} alt="tweet" />
                </a>
            </div>
            <div className="footer">  
                <p className="footer-text">
                    Data from Twitter Tweets, Reddit Posts, and news headlines.
                    <span style={{padding: '0 .5em'}}>|</span>    
                    <a className="footer-link" onClick={() => setShowAboutModal(true)}>
                        <span className="footer-link-text">About</span>
                    </a>
                    <span style={{padding: '0 .5em'}}>|</span>
                    <a className="footer-link" onClick={() => setShowContactModal(true)}>
                        <span className="footer-link-text">Contact</span>
                    </a>
                    </p>
            </div>

        </div>
    );
}

export default Footer;