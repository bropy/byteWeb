import axios from 'axios';

const API_BASE_URL_USERS = 'https://byteserver-b28593dfb543.herokuapp.com/users';

const api = axios.create({
  baseURL: API_BASE_URL_USERS,
});

export const fetchData = async (endpoint = '') => {
  try {
    console.log("Fetching from:", API_BASE_URL_USERS + endpoint); 
    const response = await api.get(endpoint);
    console.log("Response:", response); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response || error);
    throw error;
  }
};