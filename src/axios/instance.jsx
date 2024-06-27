import axios from "axios";

const apiHome = axios.create({
  baseURL: `${process.env.REACT_APP_REQUEST_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const registerInstance = async(data) =>{
  const response = await apiHome.post('/users',data);
  
  return response.data
}

export const loginInstance = async(data) => {
  const response = await apiHome.post('/users/sign_in', data);

  return response.data
}