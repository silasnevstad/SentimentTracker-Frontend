import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading, setError, filter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (keyword !== '') {
      setIsLoading(true);

      let model = filter === 'precision' ? 'gpt-4' : 'gpt-3.5-turbo';

      // make url, if keyword has hashtags, replace with %23
      let url = `https://boiling-lake-10566.herokuapp.com/sentiment` //`https://senttrac-backend-dev.us-west-2.elasticbeanstalk.com/sentiment`//`http://0.0.0.0:8000/sentiment?keyword=${keyword}&model=${model}` // `http://senitment--backend-env.eba-tpnwk3fv.us-west-2.elasticbeanstalk.com/sentiment?keyword=${keyword}&model=${model}`; // `http://127.0.0.1:5000/sentiment?keyword=${keyword}&model=${model}`
      url = url.replace(/#/g, '%23');

      // Fetch sentiment summary from Flask API...
      axios.get(url, {
        method: 'GET',
        params: {
          keyword: keyword, 
          model: model,
        },
        headers: {
          // 'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
        },
        async: true, 
        timeout: 10000000000,
      })
        .then((response) => {
          if (response.data.error) {
            setError(true);
          } else {
            setError(false);
            setData(response.data);
          }
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        }
      );
    }
  }, [keyword, setIsLoading]);

  return data;
};

export default useSentiment;