import React from "react";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.props);
  }

  const apiKey = "bt87f7d7a5b40d83e6325o6a0bfef2da";
  let lon = props.data.coordinates.longitude;
  let lat = props.data.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <img
            src={props.data.iconURL}
            alt={props.data.description}
            className="float-left weather-forecast-icon"
          />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max"> 19° </span>
            <span className="DailyForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
