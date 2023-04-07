import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentimentScores = (keyword, setIsLoading) => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    if (keyword) {
      setIsLoading(true);

      // Fetch sentiment summary from Flask API...
      axios.get(`http://localhost:5000/sentiment_summary?keyword=${keyword}`)
        .then((response) => {
          setScores(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching sentiment summary:', error);
          setIsLoading(false);
        });
    }
  }, [keyword, setIsLoading]);

  return scores;
};

export default useSentimentScores;