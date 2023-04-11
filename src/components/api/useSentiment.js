import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading, setError, filter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword !== '') {
      setIsLoading(true);

      let model = filter === 'balanced' ? 'gpt-4' : 'gpt-3.5-turbo';

      // Fetch sentiment summary from Flask API...
      axios.get(`http://senitment--backend-env.eba-tpnwk3fv.us-west-2.elasticbeanstalk.com/sentiment?keyword=${keyword}&model=${model}`)
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