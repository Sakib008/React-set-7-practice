import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

// import { DisplayProducts } from "./Pages/displayProduct";
import { DisplayQuotes } from "./Pages/displayQuotes";
import { DisplayMovies } from "./Pages/displayMovies";
import { DisplayWeather } from "./Pages/displayWeather";
// import { DisplayMovies2 } from "./Pages/displaymovies2";
import { DisplayProduct2 } from "./Pages/displayProducts2";

export default function App() {
  return (
    <div className="bg-yellow-400 w-screen h-screen flex ">
      <div className="w-[80vw] h-[80vh] m-auto flex items-center flex-col justify-start border-4 bg-sky-400 rounded-2xl border-red-300 ">
        <h1 className="text-3xl font-bold text-white font-fira-code ">
          Sakib&apos;s Dev Box
        </h1>

        {/* <DisplayWeather /> */}
        {/* <DisplayMovies /> */}
        {/* <DisplayMovies2 /> */}
        {/* <DisplayQuotes /> */}
        {/* <DisplayProducts /> */}

        <nav className="flex p-2 font-bold text-xl rounded-2xl border-4  border-rose-300 font-fira-code ">
          <NavLink className="mx-10 cursor-pointer hover:text-red-500" to={"/"}>
            Weather
          </NavLink>
          <NavLink
            className="mx-10 hover:text-red-500 cursor-pointer"
            to={"/product"}
          >
            Products
          </NavLink>
          <NavLink
            className="mx-10 cursor-pointer hover:text-red-500"
            to={"/movies"}
          >
            Movies
          </NavLink>
          <NavLink
            className="mx-10 cursor-pointer hover:text-red-500"
            to={"/quotes"}
          >
            Quotes
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<DisplayWeather />} />
          <Route path="/product" element={<DisplayProduct2 />} />
          <Route path="/movies" element={<DisplayMovies />} />
          <Route path="/quotes" element={<DisplayQuotes />} />
        </Routes>

        {/* <DisplayProduct2 /> */}
      </div>
    </div>
  );
}
