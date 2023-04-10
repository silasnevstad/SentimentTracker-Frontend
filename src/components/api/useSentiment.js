import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading, setError) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword !== '') {
      console.log('keyword use Sentiment: ', keyword)
      setIsLoading(true);

      // Fetch sentiment summary from Flask API...
      axios.get(`http://senitment--backend-env.eba-tpnwk3fv.us-west-2.elasticbeanstalk.com/sentiment?keyword=${keyword}`)
        .then((response) => {
          if (response.data.error) {
            setError(true);
          } else {
            setError(false);
            setData(response.data);
            
          }
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