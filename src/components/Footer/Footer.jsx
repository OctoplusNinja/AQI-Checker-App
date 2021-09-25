import "./Footer.css";
import gitrepo from "./../../assets/rxns/gitrepo.png";

function Header() {
	return (
		<div className="footer">
			<h1>AQI Checker App.</h1>
			<img className="gitrepo" src={gitrepo} alt="gitrepo" />
			<p>
				{"< Made with ❤️ and 💻 by "}{" "}
				<a
					href="https://github.com/lostgirljourney"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"FALGUNI"}
				</a>{" "}
				&{" "}
				<a
					href="https://github.com/OctoplusNinja"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"ANIRUDDHA"}
				</a>
				{" />"}
			</p>
		</div>
	);
}

export default Header;
