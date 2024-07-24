import axios from "axios";
import Cookies from "js-cookie"

const apiHome = axios.create({
  baseURL: `${process.env.REACT_APP_REQUEST_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json'
  },
});

const apiPrivate = axios.create({
  baseURL: `${process.env.REACT_APP_REQUEST_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  },
})

export { apiHome, apiPrivate }