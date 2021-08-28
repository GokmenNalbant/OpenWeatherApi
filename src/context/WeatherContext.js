import { createContext, useState } from "react";


const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("ankara");

    const values = {
        city,
        setCity,
    };

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )

};

export default WeatherContext;