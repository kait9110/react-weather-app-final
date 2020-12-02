import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeHolder="Enter City Name"
            className="search-form"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>

        <h1>Austin</h1>
        <ul>
          <li>Wednesday 12:18pm</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humdity: 57%</li>
              <li>Wind: 6 mph</li>
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
