import { useState, useEffect } from 'react';
import axios from 'axios';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

function parseAllResponse(response) {
  let parsedResponse = {};

  try {
    // Extract scores
    let scoresPattern = /scores:([^]*?)(?=\ssummary:)/i;
    let scoresMatch = response.match(scoresPattern);
    if(scoresMatch) {
      let scoresStr = scoresMatch[1].trim();
      let scores = {};
      scoresStr.split(',').forEach(score => {
        let parts = score.split(':');
        if (parts.length === 2) {
          let key = parts[0].trim();
          let value = parts[1].trim();
          if (value.slice(-1) === '.') value = value.slice(0, -1);
          scores[key] = parseInt(value);
        }
      });
      parsedResponse['scores'] = scores;
    }

    // Extract summary
    let summaryPattern = /summary:([^]*?)(?=\skeywords:)/i;
    let summaryMatch = response.match(summaryPattern);
    if(summaryMatch) {
      let summaryStr = summaryMatch[1].trim();
      // remove comma at end of summary if it exists
      if (summaryStr.slice(-1) === ',') summaryStr = summaryStr.slice(0, -1);
      parsedResponse['summary'] = summaryStr;
    }

    // Extract keywords
    let keywordsPattern = /keywords:([^]*)/i;
    let keywordsMatch = response.match(keywordsPattern);
    if(keywordsMatch) {
      let keywordsStr = keywordsMatch[1].trim();
      keywordsStr = keywordsStr.replace(']', '').replace('.', '');
      let keywords = keywordsStr.split(',').map(keyword => keyword.trim());
      parsedResponse['keywords'] = keywords;
    }
    
  } catch (error) {
    // console.log(error);
  }
  return parsedResponse;
}


function countNumberOfTweetPostsTitles(all_messages) {
  let tweets = 0;
  let posts = 0;
  let titles = 0;
  all_messages.forEach((message) => {
      if (message.startsWith('tweet: ')) tweets++;
      else if (message.startsWith('post: ')) posts++;
      else if (message.startsWith('news: ')) titles++;
  });
  return { tweets, posts, titles };
}

const getSentiment = async (response, model) => {
  const { data, keyword } = response;
  let { all_messages } = data;
  let gpt_response;
  let messages;
  const maxRetries = 5;
  const removePercentage = 0.35;  // Remove 20% of messages at each retry
  let attempts = 0;

  while (attempts < maxRetries) {
    const engineeredPrompt = `Thoroughly evaluate the sentiment expressed in the given series of twitter tweets, reddit posts and news headlines, originating from this query: ${keyword}, and provide three comprehensive outputs. First, calculate six emotion scores (ranging from 0 to 100) for joy, surprise, sadness, fear, anger, and neutral, reflecting the prevalence of each emotion. Second, craft a 3-5 sentence summary that succinctly captures the overarching sentiment and highlights critical points and features of importance. Lastly, pinpoint 3-7 keywords that effectively summarize the sentiment, highlighting the most prevalent emotions and features. Present your response as a well-organized list using this exact format: [scores: joy: 0, surprise: 0, sadness: 0, fear: 0, anger: 0, neutral: 0, summary: , keywords: ].`;
    messages = [{'role': 'system', 'content': engineeredPrompt}];
    // add all tweets, posts, and articles to messages
    all_messages.forEach((message) => {
      messages.push({'role': 'user', 'content': message});
    });
  
    try {
      gpt_response = await openai.createChatCompletion({
        model: model,
        messages: messages,
      });
      break;
    } catch (error) {
      let numToRemove = Math.ceil(all_messages.length * removePercentage);
      all_messages = all_messages.slice(numToRemove);
      attempts++;
    }
  }

  if (!gpt_response) {
    throw new Error('Failed to get a response after maximum retries');
  }
  
  // parse response
  const parsedResponse = parseAllResponse(gpt_response['data']['choices'][0]['message']['content']);
  const { tweets: numTweets, posts: numPosts, titles: numTitles } = countNumberOfTweetPostsTitles(all_messages);
  parsedResponse['numTweets'] = numTweets;
  parsedResponse['numPosts'] = numPosts;
  parsedResponse['numNews'] = numTitles;
  parsedResponse['keyword'] = keyword;
  return parsedResponse
}

const useSentiment = (keyword, setIsLoading, setError, filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      setIsLoading(true);

      let model = filter === 'precision' ? 'gpt-4' : 'gpt-3.5-turbo';

      // make url, if keyword has hashtags, replace with %23
      let url = `https://boiling-lake-10566.herokuapp.com/`;

      // Fetch sentiment summary from Flask API...
      axios.post(url + 'fetch', {
        keyword: keyword,
      }).then(async (response) => {
        if (response.data) {
          const sentiment = await getSentiment(response.data, model);
          // add this sentiment to the data array (first element)
          setData((data) => [sentiment, ...data]);
          setError(false);
        }
        }).catch((error) => {
          setError(true);
        }).finally(() => {
          setIsLoading(false);
        }
      );
    }
  }, [keyword, setIsLoading, setError, filter]);

  return data;
};

export default useSentiment;