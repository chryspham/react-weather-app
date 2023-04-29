import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemp(Math.round(response.data.temperature.current));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>Los Angeles</h1>
        <ul>
          <li>Tuesday 05:30</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{temp}</span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity: 68%</li>
              <li>Wind: 14 km/hs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bt87f7d7a5b40d83e6325o6a0bfef2da";
    let city = "Los Angeles";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
