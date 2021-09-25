import "./About.css";

function About() {
	return (
		<div className="aboutc">
			<p className="ptitle">About AQI Checker App...</p>
			<p className="pdesc">
				AQI Checker App is an web-app which is used to check the Air
				Quality Index of the city you wish to know. An Air Quality Index
				(AQI) is used by government agencies to communicate to the
				public how polluted the air currently is or how polluted it is
				forecast to become. Public health risks increase as the AQI
				rises. Know more here.
			</p>
			<p className="ptitle">Why this app?</p>
			<p className="pdesc">
				Most of the people are aware of air pollution and related health
				issues but are not always aware of the peak of air pollution in
				which they’re living. With this app we can show what the AQI of
				the location along with suggestion that what they should
				according to suggestion. We have keep the interface bit fancy
				yet simple so that children can even understand what they should
				do. We came with this idea because of the category “Most
				Outdoorsy Hack” mentioned in Backyard Hacks 2.0 hackathon by
				MLH.
			</p>
		</div>
	);
}

export default About;
