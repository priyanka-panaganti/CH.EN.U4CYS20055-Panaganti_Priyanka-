// api/trainApi.js

const API_BASE_URL = "http://20.244.56.144/train/register"; 

export async function getAllTrains() {
  const response = await fetch(`${API_BASE_URL}/trains`);
  const data = await response.json();
  return data;
}

export async function getTrainById(trainId) {
  const response = await fetch(`${API_BASE_URL}/trains/${trainId}`);
  const data = await response.json();
  return data;
}
