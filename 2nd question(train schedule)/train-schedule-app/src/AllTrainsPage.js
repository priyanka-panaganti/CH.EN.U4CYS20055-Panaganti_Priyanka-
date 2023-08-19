// src/AllTrainsPage.js
import React, { useState, useEffect } from 'react';
import { getAllTrains } from './api';

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = 'your_auth_token'; // Replace with your actual auth token
        const trainsData = await getAllTrains(token);
        setTrains(trainsData);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber}>
            <a href={`/train/${train.trainNumber}`}>{train.trainName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTrainsPage;
