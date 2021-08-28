import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import styles from "./Input.module.css";

const Input = () => {
    const data = useContext(WeatherContext);
    
    
    const options = [
        {
            label : "Ankara",
            value : "ankara"
        },
        {
            label : "Istanbul",
            value : "istanbul"
        },
        {
            label : "London",
            value : "london"
        }
    ];

    const inputChangeHandler = (e) => {
        data.setCity(e.target.value);
    }

    return (
        <div className={styles.inputContainer}>
            <h3>Choose The City</h3>
            <select onChange={inputChangeHandler}>
                {options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Input
