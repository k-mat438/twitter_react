import { useState } from 'react';
import { tweetAttachedImageApi, tweetPostApi } from '../axios/tweetApi';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { useGetTweet } from "../contexts/tweetContext";

const useTweet = () => {
  const { tweets, setTweets, getTweet } = useGetTweet();
  const [selectedFile, setSelectedFile] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit, reset, watch, setFocus } = useForm();
  const tweetContent = watch('postContent', '');

  const attachImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (event) => {
      const files = Array.from(event.target.files);
      console.log(files);
      Promise.all(files.map(file => 
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64 = e.target.result.split(',')[1];
            resolve({ base64: base64, url: URL.createObjectURL(file), name: file.name });
          };
          reader.readAsDataURL(file);
        })
      )).then(newFiles => {
        setSelectedFile(prevFiles => [...prevFiles, ...newFiles]);
      });
    };
    input.click();
  };

  const handleFormSubmit = () => {
    const tweetData = { tweet: { content: tweetContent } };
    tweetPostApi(tweetData).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        if (selectedFile) {
          const image = {image: {tweet_id: res.data.id, tweet_image_datas: selectedFile.map(file => file.base64), tweet_image_names: selectedFile.map(file => file.name)}}
          tweetAttachedImageApi(image).then((imageRes) => {
            // console.log('image_response',imageRes)
            const newTweetWithUser = {
              ...imageRes.data,
              user: { name: user.name }
            };
            setTweets([...tweets, newTweetWithUser]);
            resetForm();
          })
        }
        else {
          const newTweetWithUser = {
            ...res.data,
            user: { name: user.name }
          };
          setTweets([...tweets, newTweetWithUser]);
          resetForm()
        }
      }
    });
  };

  const resetForm = () => {
    reset();
    setSelectedFile([]);
    getTweet();
  };

  return {
    selectedFile,
    register,
    handleSubmit,
    attachImage,
    handleFormSubmit,
    tweetContent,
    setFocus
  }
}

export default useTweet
