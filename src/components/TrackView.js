import React from 'react';
import '../styles/TrackView.css';
import RadarChart from './RadarChart';

function TrackView({ text, scores, summary, keywords, numberOfTweets }) {
  return (
    <div className="track-view-container">
      <div className="track-view">

        <div className="track-view-body">
            <div className="track-view-score">
                <RadarChart scores={scores} />
            </div>
            <div className="track-view-body-rest">
                <div className="track-view-body-number-of-tweets">
                    {/* <text className="track-view-body-number-of-tweets-text">
                        
                    </text> */}
                    <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                    <text className="track-view-body-number-of-tweets-text">
                        {numberOfTweets} tweets analysed
                    </text>
                </div>
                <div className="track-view-header">
                    <text className="track-view-header-text">{text}</text>
                </div>
                <div className="track-view-body-content">
                    <text className="track-view-body-content-text">{summary}</text>
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
