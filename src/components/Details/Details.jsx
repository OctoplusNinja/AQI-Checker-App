import Bullet from "../Bullet/Bullet";
import AQIData from "./Data";
import Advice from "../Advice/Advice";

function Details(props) {
  //   return <div>{props.val}</div>;
  console.log(props);
  if (props.okay === false) {
    return (
      <div className="details">
        <p>City Not Found</p>
        <img src={AQIData.err.image} alt="" width="100px" />
        <Advice okay={props.okay} />
      </div>
    );
  } else {
    let AQIIndex = props.Pval.main.aqi - 1;
    return (
      <div className="details">
        <p>
          {props.Wval.name}, {props.Wval.sys.country}
        </p>
        <img src={AQIData.main[AQIIndex].image} alt="" width="100px" />
        <p>Air Quality Index:</p>
        <p>{AQIData.main[AQIIndex].AQI}</p>
        <Bullet Pval={props.Pval} temp={props.Wval.main.temp} />
        <Advice okay={props.okay} AQIIndex={AQIIndex} />
      </div>
    );
  }
}

export default Details;
