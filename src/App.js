import React, { useState, useCallback } from 'react';
import './App.css';
import Background from './components/Background';
import InputField from './components/InputField';
import Switcher from './components/Switcher';
import LoadingView from './components/LoadingView';
import BrewingLoader from './components/BrewingLoader';
import IntroMessage from './components/IntroMessage';
import TrackView from './components/TrackView';
import Footer from './components/Footer';
import useSentiment from './components/api/useSentiment';

function App() {
  const [keyword, setKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('recent');
  const [isLoading, setIsLoading] = useState(false);
  const sentimentData = useSentiment(searchTerm, setIsLoading);

  const handleButtonClick = useCallback(() => {
    if (keyword !== '') {
      setSearchTerm(keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <Background />
      <main className="App-main">
        <Switcher filter={filter} setFilter={setFilter} />
        <InputField text={keyword} setText={setKeyword} handleButtonClick={handleButtonClick} />
        {!sentimentData && !isLoading && <IntroMessage />}
        {isLoading && <LoadingView />}
        {sentimentData && !isLoading && <TrackView text={sentimentData.keyword} scores={sentimentData.scores} summary={sentimentData.summary} keywords={sentimentData.keywords} numberOfTweets={sentimentData.tweetsAnalysed} isLoading={isLoading} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
