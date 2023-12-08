import React from 'react';

export default function Weather(props) {
  console.log(props.weather);

  // Check if props.weather is defined before mapping
  if (!props.weather) {
    return <div>No weather data available</div>;
  }

  const fiveDayForecast = props.weather;

  return (
    <div>
      {fiveDayForecast.map((day) => (
        <div key={day.date}>
          <p>Date: {day.date}</p>
          <p>Description: {day.description}</p>
        </div>
      ))}
    </div>
  );
}
