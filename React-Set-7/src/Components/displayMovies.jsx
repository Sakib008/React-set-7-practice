import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/moviesApi";

export function DisplayMovies(){
    const [movies,setMovies] = useState([]);
    const [filteredMovies,setFilteredMovies] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    const handleMovies = async ()=>{
         setIsLoading(true);
         try{
            const response = await fakeFetch('https://example.com/api/movies');
            setMovies(response.data)
            setFilteredMovies(response.data)
            setIsLoading(false)
        }catch(err){
            console.error(err)
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        handleMovies()
    },[]);

    const handleFilteredMovies =(e)=>{
        
            const updateMovie = movies.filter(({year})=>year.toString()=== e.target.value);
            if(e.target.value === 'all'){
                setFilteredMovies(movies);
            }else{
                setFilteredMovies(updateMovie);
            }
        
    }

    return(
        <div>
            {isLoading && <p>Loading.....</p> }
            <select onChange={(e)=>handleFilteredMovies(e)}>
                <option value = 'all'>All Year</option>
                <option value = '2006'>2006</option>
                <option value = '2007'>2007</option>
                <option value = '2008'>2008</option>
                <option value = '2009'>2009</option>
                <option value = '2010'>2010</option>
            </select>
        {
        filteredMovies.map(({title,year,rating},index)=>
        <li key={index}>
            <p>Name : {title}</p>
            <p>Year : {year}</p>
            <p>Rating : {rating}</p>
        </li>
        )
        }
        </div>
    )
}