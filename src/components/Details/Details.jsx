import AQIData from "./Data";

function Details(props) {
  //   return <div>{props.val}</div>;
  console.log(props);
  if (props.okay === false) {
    return (
      <div className="details">
        <p>City Not Found</p>
        <img src={AQIData.err.image} alt="" width="100px" />
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
      </div>
    );
  }
}

export default Details;
