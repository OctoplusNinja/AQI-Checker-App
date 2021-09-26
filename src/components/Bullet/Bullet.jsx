import temp from "./../../assets/rxns/temp.png";
import "./Bullet.css";

function Bullet(props) {
	let values = props.Pval.components;
	return (
		<div className="bd">
			<div className="bullet">
				<div>
					<div className="left">
						<p>co: {values.co}</p>
					</div>
					<div className="left">
						<p>nh3: {values.nh3}</p>
					</div>
				</div>
				<div>
					<div className="right">
						<p>no: {values.no}</p>
					</div>
					<div className="right">
						<p>no2: {values.no2}</p>
					</div>
				</div>
				<div>
					<div className="left">
						<p>o3: {values.o3}</p>
					</div>
					<div className="left">
						<p>PM 2.5: {values.pm2_5}</p>
					</div>
				</div>
				<div>
					<div className="right">
						<p>PM 10: {values.pm10}</p>
					</div>
					<div className="right">
						<p>so2: {values.so2}</p>
					</div>
				</div>
				<div className="temp">
					<img src={temp} alt="temp" />
					<p>{props.temp}° C</p>
				</div>
			</div>
			<p className="info">
				[Pollutant concentration in μg/m³]
				<div className="temp-out">
					<img src={temp} alt="temp" />
					<p>{props.temp}° C</p>
				</div>
			</p>
		</div>
	);
}

export default Bullet;
