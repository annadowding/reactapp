import React from "react";
import axios from "axios";



export default function Weather () {
        
    function displayWeather (response) {
        alert (
            `The weather in London is ${response.data.main.temp}!`);
    }
    
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);

}