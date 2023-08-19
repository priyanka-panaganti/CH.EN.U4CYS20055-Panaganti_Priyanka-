// src/SingleTrainPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrainDetails } from './api'; // Define this function similarly to getAllTrains

function SingleTrainPage() {
  const { trainNumber } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    async function fetchTrainDetails() {
      try {
        const token = 'your_auth_token'; // Replace with your actual auth token
        const trainData = await getSingleTrainDetails(trainNumber, token);
        setTrainDetails(trainData);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    }
    
    fetchTrainDetails();
  }, [trainNumber]);

  if (!trainDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{trainDetails.trainName}</h1>
      <p>Departure Time: {trainDetails.departureTime.Hours}:{trainDetails.departureTime.Minutes}</p>
      <p>Sleeper Seats Available: {trainDetails.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {trainDetails.seatsAvailable.AC}</p>
      <p>Sleeper Price: {trainDetails.price.sleeper}</p>
      <p>AC Price: {trainDetails.price.AC}</p>
      <p>Delayed By: {trainDetails.delayedBy} minutes</p>
    </div>
  );
}

export default SingleTrainPage;
