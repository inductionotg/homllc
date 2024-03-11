import { createContext,useContext } from "react";
import { useState,useEffect } from 'react';
import axios from 'axios'
const ConversionContext = createContext()
const url='https://api.openweathermap.org/data/2.5/forecast?lat=40.710283522202744&lon=-74.01042972796357&appid=b5e77583df506e6d97e6907622ddd709'
const ConversionProvider = ({children})=>{
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data)
            setWeatherData(data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoading(false)
        }
        };

        fetchData();
    }, []);
    const convertTimestampToHours = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const roundedHours = ('0' + Math.round(date.getMinutes() / 60 + date.getHours())).slice(-2); // Add leading zero
        return `${roundedHours}:00`;
      };
      const weatherInfoArray = weatherData?.list.slice(0, 5).map(item => {
        const { dt, weather, main, wind } = item;
        const { icon, description } = weather[0];
        const convertedTime = convertTimestampToHours(dt);

        return {
          dt: convertedTime,
          icon,
          description,
          main: {
            temp: main.temp,
            feels_like: main.feels_like,
            humidity: main.humidity,
            pressure: main.pressure,
            temp_max: main.temp_max,
            temp_min: main.temp_min,
          },
          wind: {
            deg: wind.deg,
            gust: wind.gust,
            speed: wind.speed,
          },
        };
      });

    

    return (
        <ConversionContext.Provider value={{weatherData,loading,weatherInfoArray}} >
            {children}
        </ConversionContext.Provider>
    )
}
const useConversion=()=>useContext(ConversionContext)
export {useConversion,ConversionProvider}