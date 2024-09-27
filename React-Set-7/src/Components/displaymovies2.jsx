import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/movies2Api";

export function DisplayMovies2() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch Data
  const handleMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      setMovies(response.data);
      setFilteredMovies(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMovies();
  }, []);

  // Add Dropdown
  const filterMovie = (e) => {
    const data = e.target.value;
    if (data === "All") {
      setFilteredMovies(movies);
    } else {
      const updateMovie = movies.filter(({ genre }) => data === genre);
      setFilteredMovies(updateMovie);
    }
  };

  const uniqueGenre = [...new Set(movies.map(({ genre }) => genre))];
  console.log(uniqueGenre);
  return (
    <div>
      <select name="movieList" id="movieList" onChange={filterMovie}>
        <option value="All">All</option>
        {isLoading && <option>Loading...</option>}
        {uniqueGenre.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {isLoading && <h1>Loading...</h1>}
      <div>
        {filteredMovies.map(({ title, year, genre }) => (
          <li key={title}>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{genre}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
