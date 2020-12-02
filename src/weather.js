import React from "react";
import "./weather.css";

export default function Weather() {
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
          <span className="temperature">61</span>
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
}
