import React, { useState } from 'react';
import '../styles/TrackView.css';
import RadarChart from './RadarChart';

function TrackView({ text, scores, summary, keywords, numberOfTweets, numberOfPosts, numberOfNews, askAboutRawData, toggleView }) {
    // type out the title, number of tweets and summary
    const title = text;
    const numTweetsString = numberOfTweets > 1 ? numberOfTweets + ' tweets' : numberOfTweets + ' tweet';
    const numPostsString = numberOfPosts > 1 ? numberOfPosts + ' posts' : numberOfPosts + ' post';
    const numNewsString = numberOfNews > 1 ? numberOfNews + ' articles' : numberOfNews + ' article';
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleAsk = async () => {
        setIsLoading(true);
        try {
            const response = await askAboutRawData(question, title);
            setAnswers((prevAnswers) => [response, ...prevAnswers]);
        } catch (error) {
            // console.log('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="track-view-container">
            <div className="track-view">
                <div className="track-view-body">
                    <div className="track-view-score">
                        <RadarChart scores={scores} labelSize={window.innerWidth > 600 ? 22 : 17} tickBackground={'#2c2c2c'} />
                    </div>
                    <div className="track-view-body-rest">
                        <div className="track-view-header" onClick={toggleView}>
                            <p className="track-view-header-text">{title}</p>
                        </div>
                        <div className="track-view-body-number track-view-body-number-view">
                            {numberOfNews > 0 &&
                                <div className="track-view-body-number-of-item">
                                    <img className="track-view-body-number-of-icon" src={require('./images/newsIcon.png')} alt="tweet" />
                                    <p className="track-view-body-number-of-text">
                                        {window.innerWidth > 600 ? numNewsString : numberOfNews}
                                    </p>
                                
                                </div>
                            }
                            
                            {numberOfTweets > 0 &&
                                <div className="track-view-body-number-of-item">
                                    <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                                    <p className="track-view-body-number-of-text">
                                        {window.innerWidth > 600 ? numTweetsString : numberOfTweets}
                                    </p>
                                    
                                </div>
                            }

                            {numberOfPosts > 0 &&
                                <div className="track-view-body-number-of-item">
                                    <img className="track-view-body-number-of-icon" src={require('./images/redditLogo.png')} alt="post" />
                                    <p className="track-view-body-number-of-text">
                                        {window.innerWidth > 600 ? numPostsString : numberOfPosts}
                                    </p>
                                </div>
                            }
                        </div>
                        <div className="track-view-body-content">
                            <p className="track-view-body-content-text">{summary}</p>
                        </div>
                        <div className="track-view-body-key-words">
                            {/* <p className="track-view-body-key-words-title">
                                Key Words:
                            </p> */}
                            {/* <p className="track-view-body-key-words-text">
                                {keywords.map((keyword, index) => (
                                    <span key={keyword}>{keyword}{index < keywords.length - 1 ? ', ' : ''}</span>
                                ))}
                            </p> */}
                        </div>
                        <div className="track-view-question">
                            <div className="track-view-question-header">
                                <input className="track-view-question-input" type="text" placeholder="Ask a follow up question..." value={question} onChange={(e) => setQuestion(e.target.value)} />
                                <button className="track-view-question-button" onClick={handleAsk}>
                                    {isLoading ? (
                                        <div className="spinner"></div>
                                    ) : (
                                        "Ask"
                                    )}
                                </button>
                            </div>
                            {answers.map((answer, index) => (
                                <div key={index} className="track-view-question-answer">
                                    <p className="track-view-question-answer-text">{answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="line" style={{width: '100%', height: '1px', backgroundColor: '#666', marginTop: '1em'}}></div> */}
            </div>

            
        </div>
    );
}

export default TrackView;
