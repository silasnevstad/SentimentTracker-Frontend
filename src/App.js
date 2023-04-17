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
import TrackView from './components/TrackView';
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
  }, [keyword]);

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
          {!sentimentData && !isLoading && !error && <IntroMessage />}
          {isLoading && <LoadingView />}
          {error && <ErrorMessage />}
          {sentimentData && !isLoading && !error && 
            <TrackView 
              text={sentimentData.keyword} 
              scores={sentimentData.scores} 
              summary={sentimentData.summary} 
              keywords={sentimentData.keywords} 
              numberOfTweets={sentimentData.tweetsAnalysed} 
              numberOfPosts={sentimentData.redditPostsAnalysed} 
              numberOfNews={sentimentData.newsAnalysed}
            />
          }
        </main>
        <Footer setShowAboutModal={setShowAboutModal} setShowContactModal={setShowContactModal} />
      </div>
    </>
  );
}

export default App;
