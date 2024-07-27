import React, { useState } from "react";

import SearchBar from "./SearchBar/SearchBar.jsx";
import WeatherCard from "./WeatherCard/WeatherCard.jsx";

export default function App() {
  // data from api
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <SearchBar data={data} setData={setData} />
      <WeatherCard data={data} />
    </div>
  );
}

