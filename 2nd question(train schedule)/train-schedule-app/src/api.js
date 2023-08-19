
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

export async function registerCompany(companyData) {
  const response = await axios.post(`${BASE_URL}/train/register`, companyData);
  return response.data;
}

export async function getAuthToken(authData) {
  const response = await axios.post(`${BASE_URL}/train/auth`, authData);
  return response.data;
}

export async function getAllTrains(token) {
  const response = await axios.get(`${BASE_URL}/train/trains`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
