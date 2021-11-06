import React, { useState } from "react";
import axios from "axios";

import './Weather.css';

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});

    function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
  }

    function updateCity(event) {
        setCity(event.target.value);
  }

  return (
    <div className="Weather">
        <div className="container">
            <div className="weather-app-wrapper">
                <div className="weather-app">
                    <form class="row" onSubmit={handleSubmit}>
                        <div class="col-sm col-md mb-2">
                            <input type="search" className="form-control" autocomplete="off" placeholder="Enter a city..." onChange={updateCity} />
                        </div>
                        <div class="col-sm col-md">
                            <input type="submit" value="Search" className="btn btn-light w-100 mb-3" />
                        </div>
                    </form>
                    <div className="overview">
                        <h1>{city.trim().toUpperCase()}</h1>
                        <ul>
                        <li>
                            <span>Sun, Oct 17 10:41</span>
                        </li>
                        <li>{weather.description}</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <div className="clearfix weather-temperature">
                            <img src={weather.icon} alt={weather.description} className="float-left" />
                            <div className="float-left">
                            <strong>{Math.round(weather.temperature)}</strong>
                            <span className="units">°C</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <ul className="temp-condition">
                            <li>
                            Humidity: <span>{weather.humidity}</span>%
                            </li>
                            <li>
                            Wind: <span>{weather.wind}</span> km/h
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <small><a href="https://github.com/JoseRaiders/weather-react" target="_blank" rel="noreferrer">Open-source code</a> by Anuska Jose</small>
            </div>
        </div>
    </div>
  );
}