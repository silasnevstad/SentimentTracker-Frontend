import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading, setError, filter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword !== '') {
      setIsLoading(true);

      console.log('filter:', filter)
      let model = filter === 'precision' ? 'gpt-4' : 'gpt-3.5-turbo';
      console.log('model:', model)

      // make url, if keyword has hashtags, replace with %23
      let url = `http://senttrac-backend-dev.us-west-2.elasticbeanstalk.com/sentiment?keyword=${keyword}&model=${model}`//`http://0.0.0.0:8000/sentiment?keyword=${keyword}&model=${model}` // `http://senitment--backend-env.eba-tpnwk3fv.us-west-2.elasticbeanstalk.com/sentiment?keyword=${keyword}&model=${model}`; // `http://127.0.0.1:5000/sentiment?keyword=${keyword}&model=${model}`
      url = url.replace(/#/g, '%23');

      // Fetch sentiment summary from Flask API...
      axios.get(url, {
        method: 'GET',
        async: true, 
        timeout: 0,
      })
        .then((response) => {
          console.log(response)
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
          console.error('Error fetching sentiment:', error);
          setIsLoading(false);
        });
    }
  }, [keyword, setIsLoading]);

  return data;
};

export default useSentiment;