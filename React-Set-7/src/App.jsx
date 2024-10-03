import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

// import { DisplayProducts } from "./Pages/displayProduct";
// import { DisplayMovies2 } from "./Pages/displaymovies2";
import { DisplayQuotes } from "./Pages/displayQuotes";
import { DisplayMovies } from "./Pages/displayMovies";
import { DisplayWeather } from "./Pages/displayWeather";

import { DisplayProduct2 } from "./Pages/displayProducts2";

export default function App() {
  return (
    <div>
      <h1>Sakib&apos;s Dev Box</h1>

      {/* <DisplayWeather/> */}
      {/* <DisplayMovies/> */}
      {/* <DisplayMovies2 /> */}
      {/* <DisplayQuotes /> */}
      {/* <DisplayProducts /> */}

      <h1>My Cart</h1>
      <nav>
        <NavLink to={"/"}> Weather || </NavLink>
        <NavLink to={"/product"}> Products || </NavLink>
        <NavLink to={"/movies"}> Movies || </NavLink>
        <NavLink to={"/quotes"}> Quotes</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<DisplayWeather />} />
        <Route path="/product" element={<DisplayProduct2 />} />
        <Route path="/movies" element={<DisplayMovies />} />
        <Route path="/quotes" element={<DisplayQuotes />} />
      </Routes>

      {/* <DisplayProduct2 /> */}
    </div>
  );
}
