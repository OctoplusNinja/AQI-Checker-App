import axios from "axios";
import React, { useState } from "react";

const BaseURL = "http://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Search() {
	const [city, setCity] = useState("");
	const [val, setVal] = useState("");

	function getLocation(e) {
		e.preventDefault();
		axios
			.get(`${BaseURL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
			.then((res) => {
				let coord = res.data.coord;
				axios
					.get(
						`${BaseURL}/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`
					)
					.then((resP) => {
						setVal(resP.data.list[0].components);
						console.log(resP.data.list[0].components);
					});
			})
			.catch((err) => {
				// console.error(err);
			});
		console.log(city);
	}
	return (
		<div className="search">
			<form onSubmit={getLocation}>
				<input
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			<div>{val.co}</div>
		</div>
	);
}

export default Search;
