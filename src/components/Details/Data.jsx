import AQI1 from "../../assets/rxns/one.png";
import AQI2 from "../../assets/rxns/two.png";
import AQI3 from "../../assets/rxns/three.png";
import AQI4 from "../../assets/rxns/four.png";
import AQI5 from "../../assets/rxns/five.png";

import GIF1 from "../../assets/gifs/camping.gif";
import GIF2 from "../../assets/gifs/walking.gif";
import GIF3 from "../../assets/gifs/gardening.gif";
import GIF4 from "../../assets/gifs/mask.gif";
import GIF5 from "../../assets/gifs/home.gif";

import errImg from "../../assets/rxns/confused.png";
import errGif from "../../assets/gifs/no-clue.gif";

var AQIData = {
	main: [
		{
			image: AQI1,
			AQI: "Good",
			gif: GIF1,
			message:
				"Air is fair so be fair to your life and go for some outdoor activity.",
		},
		{
			image: AQI2,
			AQI: "Fair",
			gif: GIF2,
			message:
				"Walking is good for health so go outside and have a long walk!",
		},
		{
			image: AQI3,
			AQI: "Moderate",
			gif: GIF3,
			message:
				"If, if it's not very important to go out, do some gardening and take care of the plants.",
		},
		{
			image: AQI4,
			AQI: "Poor",
			gif: GIF4,
			message:
				"Mask can save you from pollutants present in the air, wear mask and stay away from respiratory disorders!",
		},
		{
			image: AQI5,
			AQI: "Very Poor",
			gif: GIF5,
			message: "Stay Home and stay safe...",
		},
	],
	err: { image: errImg, gif: errGif },
};

export default AQIData;
