import "./App.css";
import { DisplayQuotes } from "./Components/displayQuotes";
// import { DisplayMovies } from './Components/displayMovies'
// import { DisplayWeather } from './Components/displayWeather'

export default function App() {
  return (
    <div>
      <h1>Sakib&apos;s Dev Box</h1>
      {/* <DisplayWeather/> */}
      {/* <DisplayMovies/> */}

      <DisplayQuotes />
    </div>
  );
}
