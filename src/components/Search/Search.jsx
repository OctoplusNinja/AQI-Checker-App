import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import Details from "../Details/Details";

const BaseURL = "http://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Search() {
  const [city, setCity] = useState("Siliguri");
  const [Pval, setPVal] = useState("");
  const [Wval, setWval] = useState("");
  const [okay, setOkay] = useState(false);

  function getLocation(e) {
    e.preventDefault();
    axios
      .get(`${BaseURL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => {
        let coord = res.data.coord;
        setWval(res.data);
        axios
          .get(
            `${BaseURL}/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`
          )
          .then((resP) => {
            setPVal(resP.data.list[0]);
            setOkay(true);
            console.log(resP.data.list[0]);
          });
      })
      .catch((err) => {
        // console.error(err);
        setOkay(false);
      });
    console.log(city);
  }
  return (
    <div className="sexrch">
      <form className="search" onSubmit={getLocation}>
        <div>
          <input
            className="searchbox"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <button title="click me" type="submit" className="sub-btn"></button>
        </div>
        <p className="loc">or let us know your location!</p>
      </form>
      <Details className="Details" okay={okay} Pval={Pval} Wval={Wval} />
    </div>
  );
}

export default Search;
