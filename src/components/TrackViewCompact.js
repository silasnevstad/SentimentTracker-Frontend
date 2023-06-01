import React, { useState } from 'react';
import RadarChart from './RadarChart';
import TrackView from './TrackView';
import '../styles/TrackViewCompact.css';
  
const TrackViewCompact = ({ text, scores, summary, keywords, numberOfTweets, numberOfPosts, numberOfNews, startExpanded, askAboutRawData }) => {
    const toggleView = () => {
        setIsExpanded(!isExpanded);
    };

    const shortenSummary = (summary) => {
        if (summary.length > 200) {
            // shorten the summary but don't cut off a word
            let i = 200;
            while (summary[i] !== ' ') {
                i--;
            }
            return summary.substring(0, i) + '...';
        }
        return summary;
    };

    const [isExpanded, setIsExpanded] = useState(startExpanded);
    const shortenedSummary = shortenSummary(summary);

    const compactView = (
        <div className="compact-view" onClick={toggleView}>
            <div className="compact-view-header">
                <h3>{text}</h3>
                <div className="data-counts">
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-tweets-icon" src={require('./images/twitterLogo.png')} alt="tweet" />
                        <p>{numberOfTweets}</p>
                    </div>
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-icon" src={require('./images/redditLogo.png')} alt="post" />
                        <p>{numberOfPosts}</p>
                    </div>
                    <div className="data-counts-row">
                        <img className="track-view-body-number-of-icon" src={require('./images/newsIcon.png')} alt="tweet" />
                        <p>{numberOfNews}</p>
                    </div>
                </div>
            </div>
            <div className="compact-view-summary">
                <p>{shortenedSummary}</p>
                <div className="keywords">
                    {keywords.slice(0, 5).map((keyword, index) => (
                        <span key={keyword}>{keyword}{index < 4 ? ',' : ''}</span>
                    ))}
                </div>
            </div>
            
            <div className="compact-score">
                <RadarChart scores={scores} labelSize={window.innerWidth > 600 ? 11 : 15} tickBackground={'#333'} />
            </div>
        </div>
    );

    const expandedView = (
        <TrackView text={text} scores={scores} summary={summary} keywords={keywords} numberOfTweets={numberOfTweets} numberOfPosts={numberOfPosts} numberOfNews={numberOfNews} askAboutRawData={askAboutRawData} toggleView={toggleView} />
    );
  
    return (
        <div className="track-view-compact">
          {isExpanded ? expandedView : compactView}
        </div>
    );
};

export default TrackViewCompact; 