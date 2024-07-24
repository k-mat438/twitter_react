import { createContext, useState, useContext } from 'react';
import { tweetGetApi } from '../axios/tweetApi';


const TweetContext = createContext({
  setTweets: () => {},
  tweets: [],
});

const TweetProvider = ({children}) => {
  const [ tweets, setTweets ] = useState([]);

  const getTweet = () => {
    tweetGetApi().then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setTweets(res.data)
      }
    }).catch((error) => console.log(error))
  };

  return (
    <TweetContext.Provider value={{ tweets, setTweets, getTweet }}>
      {children}
    </TweetContext.Provider>
  )
}
export default TweetProvider;

export const useGetTweet = () => useContext(TweetContext)