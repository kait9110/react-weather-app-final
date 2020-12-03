import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import FinishedDate from "./finishedDate.js";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
    });
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter City Name"
            className="search-form"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FinishedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "06c11d11419debba7ff8c2da3a596e82";
    let city = "Austin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading App...";
  }
}
