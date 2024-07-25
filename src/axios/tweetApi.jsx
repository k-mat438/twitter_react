import { apiPrivate } from "./instance";


export const tweetPostApi = async(data) => {
  const response = await apiPrivate.post('/tweets',data)

  return response
}

export const tweetGetApi = async() => {
  const response = await apiPrivate.get('/tweets')

  return response
}

export const tweetAttachedImageApi = async(data) => {
  const response = await apiPrivate.post('/images',data)

  return response
}