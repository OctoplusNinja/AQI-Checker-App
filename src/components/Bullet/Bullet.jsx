import temp from "./../../assets/rxns/temp.png";
import "./Bullet.css";

function Bullet(props) {
	return (
		<div className="bd">
			<div className="bullet">
				<div>
					<div className="left">
						<p>no: 0</p>
					</div>
					<div className="left">
						<p>no: 0</p>
					</div>
				</div>
				<div>
					<div className="right">
						<p>no: 0</p>
					</div>
					<div className="right">
						<p>no: 0</p>
					</div>
				</div>
				<div>
					<div className="left">
						<p>no: 0</p>
					</div>
					<div className="left">
						<p>no: 0</p>
					</div>
				</div>
				<div>
					<div className="right">
						<p>no: 0</p>
					</div>
					<div className="right">
						<p>no: 0</p>
					</div>
				</div>
				<div className="temp">
					<img src={temp} alt="temp" />
					<p>20° C</p>
				</div>
			</div>
			<p className="info">[Pollutant concentration in μg/m³]</p>
		</div>
	);
}

export default Bullet;
