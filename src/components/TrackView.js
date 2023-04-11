import React, { useState, useEffect } from 'react';
import '../styles/TrackView.css';
import RadarChart from './RadarChart';

function TrackView({ text, scores, summary, keywords, numberOfTweets, numberOfPosts }) {
    // type out the title, number of tweets and summary
    const [title, setTitle] = useState('');
    const [numTweetsString, setNumTweetsString] = useState('');
    const [numPostsString, setNumPostsString] = useState('');
    const [summaryString, setSummaryString] = useState('');

    const animateTitle = (title) => {
        // type out the title
        let i = 0;
        const interval = setInterval(() => {
            if (i < title.length) {
                setTitle(title.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 10) + 20);
    };

    const animateNums = (numTweets, numPosts) => {
        // type out the number of tweets and posts
        let i = 0;
        let tweetsString = numTweets + ' tweets';
        let postsString = numPosts + ' posts';
        const interval = setInterval(() => {
            if (i < tweetsString.length) {
                setNumTweetsString(tweetsString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 1) + 5);

        i = 0;
        const interval2 = setInterval(() => {
            if (i < postsString.length) {
                setNumPostsString(postsString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval2);
            }
        }, Math.floor(Math.random() * 1) + 5);

    };

    const animateSummary = (summaryString) => {
        // type out the summary
        let i = 0;
        const interval = setInterval(() => {
            if (i < summaryString.length) {
                setSummaryString(summaryString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 1) + 5);
    };

    const animateAll = (title, numTweetsString, numPostsString, summaryString) => {
        // animate the title
        animateTitle(title);
        
        // animate the number of tweets
        animateNums(numTweetsString, numPostsString);

        // animate the summary
        animateSummary(summaryString);
    };

    // animate the title, number of tweets and summary when the component mounts
    useEffect(() => {
        animateAll(text, numberOfTweets, numberOfPosts, summary);
    }, []);

    return (
        <div className="track-view-container">
            <div className="track-view">

                <div className="track-view-body">
                    <div className="track-view-score">
                        <RadarChart scores={scores} />
                    </div>
                    <div className="track-view-body-rest">
                        <div className="track-view-body-number-view">
                            <div className="track-view-body-number-of-tweets">
                                <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                                <text className="track-view-body-number-of-tweets-text">
                                    {numTweetsString}
                                </text>
                                
                            </div>
                            <div className="track-view-body-number-of-posts">
                                <img className="track-view-body-number-of-posts-icon" src={require('./images/redditLogo.png')} alt="post" />
                                <text className="track-view-body-number-of-tweets-text">
                                    {numPostsString}
                                </text>
                            </div>
                        </div>
                        <div className="track-view-header">
                            <text className="track-view-header-text">{title}</text>
                        </div>
                        <div className="track-view-body-content">
                            <text className="track-view-body-content-text">{summaryString}</text>
                        </div>
                        <div className="track-view-body-key-words">
                            <text className="track-view-body-key-words-title">
                                Key Words:
                            </text>
                            <text className="track-view-body-key-words-text">
                                {keywords.map((keyword, index) => {
                                    // capitalize first letter
                                    keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);

                                    if (index === keywords.length - 1) {
                                        return keyword;
                                    }
                                    return keyword + ', ';
                                })}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackView;
