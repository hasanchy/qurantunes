
function Subtitle(props) {

	const { duration, curTime, text } = props;
	let sa, translation;
	for (var t in text) {
		if (t <= curTime) {
			sa = text[t].sa;
			translation = text[t].bn;
		}
	}

	return (
		<span style={{ display: "inline-block", padding: "20px" }}>
			<div style={{ fontSize: "30px", marginTop: "30px" }}>{sa}</div>
			<div style={{ fontSize: "22px", marginTop: "30px" }}>{translation}</div>
		</span>
	);
}

export default Subtitle;