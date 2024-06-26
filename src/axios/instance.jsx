import axios from "axios";

const apiHome = axios.create({
  baseURL: `${process.env.REACT_APP_REQUEST_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const registerInstance = async(data) =>{
  data.confirm_success_url = `${process.env.REACT_APP_CONFIRM_SUCCESS_URL}`;
  const response = await apiHome.post('/users', data);
  
  return response.data
}