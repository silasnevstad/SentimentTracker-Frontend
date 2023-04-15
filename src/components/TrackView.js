import React, { useState, useEffect } from 'react';
import '../styles/TrackView.css';
import RadarChart from './RadarChart';

function TrackView({ text, scores, summary, keywords, numberOfTweets, numberOfPosts, numberOfNews }) {
    // type out the title, number of tweets and summary
    const [title, setTitle] = useState('');
    const [numTweetsString, setNumTweetsString] = useState('');
    const [numPostsString, setNumPostsString] = useState('');
    const [numNewsString, setNumNewsString] = useState('');
    const [summaryString, setSummaryString] = useState('');
    const [keywordsString, setKeywordsString] = useState('');

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

    const animateNums = (numTweets, numPosts, numNews) => {
        // type out the number of tweets and posts and news
        let i = 0;
        let tweetsString = numTweets > 1 ? numTweets + ' tweets' : numTweets + ' tweet';
        let postsString = numPosts > 1 ? numPosts + ' posts' : numPosts + ' post';
        let newsString = numNews > 1 ? numNews + ' articles' : numNews + ' article';
        const newsInterval = setInterval(() => {
            if (i < newsString.length) {
                setNumNewsString(newsString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(newsInterval);
            }
        }, Math.floor(Math.random() * 10) + 50);
        i = 0;
        const interval = setInterval(() => {
            if (i < tweetsString.length) {
                setNumTweetsString(tweetsString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 10) + 50);

        i = 0;
        const interval2 = setInterval(() => {
            if (i < postsString.length) {
                setNumPostsString(postsString.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval2);
            }
        }, Math.floor(Math.random() * 10) + 50);
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

    const animateSelection = (selection, setSelection, randomInterval, minInterval) => {
        // type out the selection
        let i = 0;
        const interval = setInterval(() => {
            if (i < selection.length) {
                setSelection(selection.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * randomInterval) + minInterval);
    };



    const animateKeywords = (keywords) => {
        // type out the keywords (list of strings)
        let i = 0;
        let keywordsString = '';
        const interval = setInterval(() => {
            if (i < keywords.length) {
                keywordsString += keywords[i] + ', ';
                setKeywordsString(keywordsString);
                i++;
            } else {
                clearInterval(interval);
            }
        }, Math.floor(Math.random() * 10) + 10);
    };

    const animateAll = (title, numTweetsString, numPostsString, numNewsString, summaryString, keywords) => {
        // animate the title
        animateSelection(title, setTitle, 20, 10);
        
        // animate the number of tweets
        animateNums(numTweetsString, numPostsString, numNewsString);

        // animate the summary
        animateSelection(summaryString, setSummaryString, 1, 1);

        // animate the keywords
        animateKeywords(keywords);
    };

    // animate the title, number of tweets and summary when the component mounts
    useEffect(() => {
        animateAll(text, numberOfTweets, numberOfPosts, numberOfNews, summary, keywords);
    }, []);

    return (
        <div className="track-view-container">
            <div className="track-view">

                <div className="track-view-body">
                    <div className="track-view-score">
                        <RadarChart scores={scores} />
                    </div>
                    <div className="track-view-body-rest">
                        <div className="track-view-header">
                            <text className="track-view-header-text">{title}</text>
                        </div>
                        <div className="track-view-body-number track-view-body-number-view">
                            {numberOfNews > 0 &&
                                <div className="track-view-body-number-of-news">
                                    <img className="track-view-body-number-of-news-icon" src={require('./images/newsIcon.png')} alt="tweet" />
                                    <text className="track-view-body-number-of-text">
                                        {numNewsString}
                                    </text>
                                
                                </div>
                            }
                            
                            {numberOfTweets > 0 &&
                                <div className="track-view-body-number-of-tweets">
                                    <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                                    <text className="track-view-body-number-of-text">
                                        {numTweetsString}
                                    </text>
                                    
                                </div>
                            }

                            {numberOfPosts > 0 &&
                                <div className="track-view-body-number-of-posts">
                                    <img className="track-view-body-number-of-posts-icon" src={require('./images/redditLogo.png')} alt="post" />
                                    <text className="track-view-body-number-of-text">
                                        {numPostsString}
                                    </text>
                                </div>
                            }
                        </div>
                        <div className="track-view-body-content">
                            <text className="track-view-body-content-text">{summaryString}</text>
                        </div>
                        <div className="track-view-body-key-words">
                            <text className="track-view-body-key-words-title">
                                Key Words:
                            </text>
                            <text className="track-view-body-key-words-text">
                                {/* {keywords.map((keyword, index) => {
                                    // capitalize first letter
                                    keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);

                                    if (index === keywords.length - 1) {
                                        return keyword;
                                    }
                                    return keyword + ', ';
                                })} */}
                                {keywordsString}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackView;
