import "./Header.css";
import favicon from "./../../assets/rxns/favicon.png";
import aboutus from "./../../assets/rxns/aboutus.png";
function Header() {
	return (
		<div className="header">
			<div className="name">
				<img className="favicon" src={favicon} alt="favicon" />
				<h1>AQI Checker App</h1>
			</div>
			<div className="about">
				<h1>About us</h1>
				<img className="favicon" src={aboutus} alt="favicon" />
			</div>
		</div>
	);
}

export default Header;
