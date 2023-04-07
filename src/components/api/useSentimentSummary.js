import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentimentSummary = (keyword, setIsLoading) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (keyword) {
      setIsLoading(true);

      // Fetch sentiment summary from Flask API...
      axios.get(`http://localhost:5000/sentiment_summary?keyword=${keyword}`)
        .then((response) => {
          setSummary(response.data);
          console.log(response.data)
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching sentiment summary:', error);
          setIsLoading(false);
        });
    }
  }, [keyword, setIsLoading]);

  return summary;
};

export default useSentimentSummary;