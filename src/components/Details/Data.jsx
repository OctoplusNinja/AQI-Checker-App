// var AQIData = {
//   data: [
//     {
//       image: "../rxns/one.png",
//     },
//     {
//       image: "../../rxns/two.png",
//     },
//     {
//       image: "../../rxns/three.png",
//     },
//     {
//       image: "../../rxns/four.png",
//     },
//     {
//       image: "../../rxns/five.png",
//     },
//   ],
// };

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
    { image: AQI1, AQI: "Good", gif: GIF1, message: "Stay Home and stay safe" },
    { image: AQI2, AQI: "Fair", gif: GIF2, message: "Stay Home and stay safe" },
    {
      image: AQI3,
      AQI: "Moderate",
      gif: GIF3,
      message: "Stay Home and stay safe",
    },
    { image: AQI4, AQI: "Poor", gif: GIF4, message: "Stay Home and stay safe" },
    {
      image: AQI5,
      AQI: "Very Poor",
      gif: GIF5,
      message: "Stay Home and stay safe",
    },
  ],
  err: { image: errImg, gif: errGif },
};

export default AQIData;
