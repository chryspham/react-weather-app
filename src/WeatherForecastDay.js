import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className="float-left weather-forecast-icon"
      />
      <div className="DailyForecast-temps">
        <span className="DailyForecast-temp-max">
          {maxTemp()}
          {}°{" "}
        </span>
        <span className="DailyForecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
