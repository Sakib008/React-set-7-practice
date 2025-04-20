import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/weatherApi";
import Loader from "../components/Loader";

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
    if(isLoading){
        return <Loader/>
    }

    return (
        <div className="font-fira-code flex flex-col p-8 border-4 border-x-yellow-200 m-10 min-w-[30vw] justify-center items-center">
        
        <h2 className="text-5xl  font-bold text-red-400 m-5">Weather</h2>
        <div className="font-medium text-lg">

        <p>Temperature : {temperatrue} {isCelcius === true ?'℃' : '℉' }</p>
        <p>Humidity : {humidity}</p>
        <p>Wind Speed : {windSpeed}</p>
        </div>
        <button onClick={handleCelcius} className="bg-yellow-200 p-1 font-medium text-lg rounded-2xl m-8 w-60 hover:text-xl">Switch to {isCelcius === true ?'Fehrenheit' : 'Celcius' }</button>

        
        </div>
    )
}