import axios from 'axios';

const API_BASE_URL = 'https://byteserver-b28593dfb543.herokuapp.com/games';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchData = async (endpoint = '') => {
  try {
    console.log("Fetching from:", API_BASE_URL + endpoint); // Debug log
    const response = await api.get(endpoint);
    console.log("Response:", response); // Debug log
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response || error);
    throw error;
  }
};