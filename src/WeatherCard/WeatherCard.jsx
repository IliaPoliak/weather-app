import React from "react";

import "./WeatherCard.css";

export default function WeatherCard({ data }) {

  // if there is no data return empty paragraph
  if (!data) {
    return <p></p>;
  }

  // extract specific properties from data object
  const { dt, main, name, sys, weather, wind } = data;

  // create date object from dt variablle
  let date = new Date(dt * 1000);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayOfWeek = date.getDay();

  // assign month abriviation to "month" variable
  switch (month) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }

  // assign day abriviation to "dayOfWeek" variable
  switch (dayOfWeek) {
    case 1:
      dayOfWeek = "Mon";
      break;
    case 2:
      dayOfWeek = "Tue";
      break;
    case 3:
      dayOfWeek = "Wed";
      break;
    case 4:
      dayOfWeek = "Thu";
      break;
    case 5:
      dayOfWeek = "Fri";
      break;
    case 6:
      dayOfWeek = "Sat";
      break;
    case 0:
      dayOfWeek = "Sun";
      break;
  }

  return (
    <div className="WeatherCard">
      <h2>{name}, {sys.country}</h2>
      <p>{dayOfWeek}, {day} {month}</p>
      <h1>{Math.round(main.temp-273.15)}°C</h1>
      <p>{weather[0].description}</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}