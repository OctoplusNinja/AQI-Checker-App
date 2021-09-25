import AQIData from "./Data";

function Details(props) {
  //   return <div>{props.val}</div>;
  console.log(props);
  if (props.okay === false) {
    return <div>Error</div>;
  } else {
    if (props.val === "") {
      return <div>Empty</div>;
    } else {
      return (
        <div className="details">
          <p>
            {props.Wval.name}, {props.Wval.sys.country}
          </p>
          <img src={AQIData[0]} alt="" width="100px" />
          <p>Air Quality Index:</p>
        </div>
      );
    }
  }
}

export default Details;
