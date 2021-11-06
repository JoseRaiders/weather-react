import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}C`)
    }

    let apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Nuk</h2>;
}