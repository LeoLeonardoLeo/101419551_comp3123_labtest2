import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../cssFolder/WeatherDetails.css'

export default function WeatherDetails() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);  


    const getWeatherData = async() => {
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=21bfac170bd93be3cef0c5b2ef2a371e'
        try{
            const response = await axios.get(apiURL)
            setData(response.data)
            setLoading(false) //since it was loaded we dont need this anymore so we set to false
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    //using this bc without it api doesnt fetch fast enough, so this gives some time to allow the page to load and fetch
    if(loading){
        return <p>Loading data</p>
    }

    
    //allows us to get the date from api
    //we need to multiply by 1000 because dt is the time in the api, 
    //but its a big number, which is the miliseconds, so we multiply by 1000 
    //
    const date1 = new Date(data.dt * 1000); 
    let date = date1.toLocaleDateString();  

    const fixTemp = data.main.temp - 273

  return (
    <div className='mainInfo'>
        <h1>Weather Details</h1>

        <div>
            <p>City: {data.name}</p>
            <p>Date: {date}</p> 
        </div>

       <div>
            <p>Temperature: {fixTemp.toFixed(2)} degrees</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed} m/s</p>
            <p>Weather: {data.weather[0].description}</p>
            <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
            


    

        </div>
    </div>
  )
}