import AQIData from "../Details/Data";

function Advice(props) {
  if (props.okay) {
    return (
      <div>
        <p>
          What you should do according to the Air Quality Index of your chosen
          location?
        </p>
        <img src={AQIData.main[props.AQIIndex].gif} alt="" />
        <p>{AQIData.main[props.AQIIndex].message}</p>
      </div>
    );
  } else {
    return <img src={AQIData.err.gif} alt="" />;
  }
}

export default Advice;
