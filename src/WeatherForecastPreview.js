import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {Math.round(props.data.main.temp)}°F
    </div>
  );
}
