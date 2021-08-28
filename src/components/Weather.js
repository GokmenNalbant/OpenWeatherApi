import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '../context/WeatherContext';
import styles from "./Weather.module.css";


const Weather = () => {
    const [weather, setWeather] = useState({
        cityName: "",
        temp_min: "",
        temp_max: "",
        description: ""
    });
    const [icon, setIcon] = useState("");
    const [loading, setLoading] = useState(true);

    const context = useContext(WeatherContext);
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${context.city}&appid=0733735d958e7a73760c5045e34976f0&units=metric&cnt=7`)
    .then((res) => {
        setLoading(true);
        setWeather({
        cityName: res.data.name,
        temp_min: res.data.main.temp_min,
        temp_max: res.data.main.temp_max,
        description: res.data.weather[0].description    
    });
        setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
        setLoading(false);
    });
    
    }, [context.city]);
    
    return (
        <div className={styles.weatherContainer}>
            <h3>{weather.cityName}</h3>
            {!loading && <img src={icon} alt="icon"/>}
            <p>
               <i>{weather.description}</i>
               <br />
               <span>{weather.temp_min}</span>
               <span>{weather.temp_max}</span>
            </p>

        </div>
    )
}

export default Weather;