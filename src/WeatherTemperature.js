import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  if (unit === "imperial") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °F
          </a>
          {""} |{""}°C
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F{""} |{""}
          <a href="/" onClick={convertToFahrenheit}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
