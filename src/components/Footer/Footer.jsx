import "./Footer.css";
import gitrepo from "./../../assets/rxns/gitrepo.png";
import heart from "./../../assets/rxns/heart.png";
import computer from "./../../assets/rxns/computer.png";

function Header() {
	return (
		<div className="footer">
			<div className="grp">
				<h1 className="footer-title">
					AQI Checker App<span className="dot">.</span>
				</h1>
				<a
					href="https://github.com/BlankCoders/AQI-Checker-App"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="gitrepo" src={gitrepo} alt="gitrepo" />
				</a>
				<p className="footer-desc">
					&#60;&nbsp;Made with&nbsp;
					<img src={heart} alt="heart" className="foot-icon" />
					&nbsp;and&nbsp;
					<img src={computer} alt="heart" className="foot-icon" />
					&nbsp;by&nbsp;
					<a
						href="https://github.com/lostgirljourney"
						target="_blank"
						rel="noopener noreferrer"
						className="own"
					>
						FALGUNI
					</a>
					&nbsp;&&nbsp;
					<a
						href="https://github.com/OctoplusNinja"
						target="_blank"
						rel="noopener noreferrer"
						className="own"
					>
						ANIRUDDHA
					</a>
					&nbsp;/&#62;
				</p>
			</div>
		</div>
	);
}

export default Header;
