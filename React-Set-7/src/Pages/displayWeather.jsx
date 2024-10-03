import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/weatherApi";

export function DisplayWeather(){
    const [weather,setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isCelcius,setIsCelcius] = useState(true)

    const handleCelcius =()=>{
        setIsCelcius(!isCelcius);
       setWeather((prevWeather)=>{
        const updateTemp = isCelcius? (prevWeather.temperatrue*9)/5 + 32 : ((prevWeather.temperatrue - 32)*5)/9;

        return {
            ...prevWeather,
            temperatrue : updateTemp,
        }
       })
    }


    const handleWeather=async()=>{
        setIsLoading(true)
    try{
        const response = await fakeFetch( 'https://example.com/api/weather');
        if(response.status === 200){
        setWeather(response.data);
   
        setIsLoading(false)
        }
    }catch(error){
        console.error(error);
        setIsLoading(false)
    }
    }

    useEffect(()=>{
        handleWeather()
    },[])

    const {temperatrue,humidity,windSpeed} = weather;

    return (
        <div>
        {isLoading && <p>Loading....</p> }
        <h2>Weather</h2>
        <p>Temperature : {temperatrue} {isCelcius === true ?'℃' : '℉' }</p>
        <p>Humidity : {humidity}</p>
        <p>Wind Speed : {windSpeed}</p>
        <button onClick={handleCelcius}>Switch to {isCelcius === true ?'Fehrenheit' : 'Celcius' }</button>

        
        </div>
    )
}