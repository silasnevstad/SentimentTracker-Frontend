import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword !== '') {
        console.log('keyword use Sentiment: ', keyword)
      setIsLoading(true);

      // Fetch sentiment summary from Flask API...
      axios.get(`http://localhost:8080/sentiment_all?keyword=${keyword}`)
        .then((response) => {
            setData(response.data);
            console.log(response.data)
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching sentiment summary:', error);
            setIsLoading(false);
        });
    }
  }, [keyword, setIsLoading]);

  return data;
};

export default useSentiment;