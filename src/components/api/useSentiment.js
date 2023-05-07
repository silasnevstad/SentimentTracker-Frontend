import { useState, useEffect } from 'react';
import axios from 'axios';

const useSentiment = (keyword, setIsLoading, setError, filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      setIsLoading(true);

      let model = filter === 'precision' ? 'gpt-4' : 'gpt-3.5-turbo';

      // make url, if keyword has hashtags, replace with %23
      let url = `https://boiling-lake-10566.herokuapp.com/sentiment`;
      url = url.replace(/#/g, '%23');

      // Fetch sentiment summary from Flask API...
      axios.get(url, {
        method: 'GET',
        params: {
          keyword: keyword, 
          model: model,
        },
        async: true, 
        timeout: 10000000000,
      })
        .then((response) => {
          if (response.data.error) {
            setError(true);
          } else {
            setError(false);
            setData((prevData) => [response.data, ...prevData]);
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
  }, [keyword, setIsLoading, setError, filter]);

  return data;
};

export default useSentiment;