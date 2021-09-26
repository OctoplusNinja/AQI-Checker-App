import AQIData from "../Details/Data";
import "./Advice.css";

function Advice(props) {
  if (props.okay) {
    return (
      <div className="advice">
        <p>
          What you should do according to the Air Quality Index of your chosen
          location?
        </p>
        <img src={AQIData.main[props.AQIIndex].gif} alt="" />
        <p className="advice-message">{AQIData.main[props.AQIIndex].message}</p>
      </div>
    );
  } else {
    return (
      <div className="advice">
        <img src={AQIData.err.gif} alt="" />
      </div>
    );
  }
}

export default Advice;
