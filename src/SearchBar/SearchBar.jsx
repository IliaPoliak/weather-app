import React, { useState } from "react";
import "./SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ data, setData }) {

  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  // fetch data from an api and set it to "data" variable
  const handleClick = () => {
    const apiKey = "8021edc7a0cb9b1aa688e856253d0017";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        setData(data);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}