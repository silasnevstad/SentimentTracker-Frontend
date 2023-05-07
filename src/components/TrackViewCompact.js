import React, { useState } from 'react';
import RadarChart from './RadarChart';
import TrackView from './TrackView';
import '../styles/TrackViewCompact.css';
  
const TrackViewCompact = ({ text, scores, summary, keywords, numberOfTweets, numberOfPosts, numberOfNews, startExpanded }) => {
    const [isExpanded, setIsExpanded] = useState(startExpanded);

    const compactView = (

        <div className="compact-view">
            <div className="compact-view-header">
                <h3>{text}</h3>
                <div className="data-counts">
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                        <p>{numberOfTweets}</p>
                    </div>
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-posts-icon" src={require('./images/redditLogo.png')} alt="post" />
                        <p>{numberOfPosts}</p>
                    </div>
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-news-icon" src={require('./images/newsIcon.png')} alt="tweet" />
                        <p>{numberOfNews}</p>
                    </div>
                </div>
            </div>
            <div className="compact-view-summary">
                <p>{summary.substring(0, 100)}...</p>
                <div className="keywords">
                    {keywords.map((keyword, index) => (
                        <span key={keyword}>{keyword}{index < keywords.length - 1 ? ',' : ''}</span>
                    ))}
            </div>
            </div>
            
            <div className="compact-score">
                <RadarChart scores={scores} labelSize={10} />
            </div>
        </div>
    );

    const expandedView = (
        // <div className="expanded-view">
          <TrackView text={text} scores={scores} summary={summary} keywords={keywords} numberOfTweets={numberOfTweets} numberOfPosts={numberOfPosts} numberOfNews={numberOfNews} />
        // </div>
    );

    const toggleView = () => {
        setIsExpanded(!isExpanded);
    };
  
    return (
        <div className="track-view-compact" onClick={toggleView}>
          {isExpanded ? expandedView : compactView}
        </div>
    );
};

export default TrackViewCompact; 