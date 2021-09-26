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
import err from "../../assets/rxns/confused.png";

var AQIData = {
  main: [
    { image: AQI1, AQI: "Good" },
    { image: AQI2, AQI: "Fair" },
    { image: AQI3, AQI: "Moderate" },
    { image: AQI4, AQI: "Poor" },
    { image: AQI5, AQI: "Very Poor" },
  ],
  err: { image: err },
};

export default AQIData;
