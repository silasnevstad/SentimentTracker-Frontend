import React, { useState, useCallback } from 'react';
import './App.css';
import Background from './components/Background';
import InputField from './components/InputField';
import Switcher from './components/Switcher';
import LoadingView from './components/LoadingView';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import IntroMessage from './components/IntroMessage';
import ErrorMessage from './components/ErrorMessage';
import TrackViewCompact from './components/TrackViewCompact';
import Footer from './components/Footer';
import useSentiment from './components/api/useSentiment';

function App() {
  const [keyword, setKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('precision');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const sentimentData = useSentiment(searchTerm, setIsLoading, setError, filter);

  const handleButtonClick = useCallback(() => {
    if (isLoading) {
      return;
    }
    if (keyword !== '') {
      setSearchTerm(keyword);
    }
  }, [keyword, isLoading]);

  return (
    <>
      {isLoading && <div className='loading-overlay'></div>}
      {showAboutModal || showContactModal ? <div className='modal-open'></div> : null}
      <div className={`App`}>
        <Background />
        <main className="App-main">
          {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />}
          {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
          <Switcher filter={filter} setFilter={setFilter} />
          <InputField text={keyword} setText={setKeyword} handleButtonClick={handleButtonClick} loading={isLoading} />
          {/* // if sentimentData is empty and isLoading is false and error is false, render IntroMessage */}
          {sentimentData.length === 0 && !isLoading && !error && <IntroMessage />}
          {isLoading && <LoadingView />}
          {error && <ErrorMessage />}
          {sentimentData && !isLoading && !error && 
            // loop through sentimentData array and render each item
            <div className='sentiment-scroll-view'>
              {sentimentData.map((sentiment, index) => (
                <>
                  <TrackViewCompact
                    text={sentiment.keyword} 
                    scores={sentiment.scores} 
                    summary={sentiment.summary} 
                    keywords={sentiment.keywords} 
                    numberOfTweets={sentiment.numTweets} 
                    numberOfPosts={sentiment.numPosts} 
                    numberOfNews={sentiment.numNews}
                    startExpanded={index === 0}
                  />
                </>
              ))}
            </div>
          }
        </main>
        <Footer setShowAboutModal={setShowAboutModal} setShowContactModal={setShowContactModal} />
      </div>
    </>
  );
}

export default App;
