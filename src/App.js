import React from "react";
import {
	BrowserRouter as Router,
	Link,
	useLocation
} from "react-router-dom";
import Thumbnails from "./components/Thumbnails";
import Watch from "./components/Watch";
import ReactGA from 'react-ga';

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
	return (
		<Router>
			<QueryParamsDemo />
		</Router>
	);
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
	let query = useQuery();
	ReactGA.pageview(window.location.pathname + window.location.search);

	return (
		<div>
			<div style={{ padding: "10px 0 0 28px" }}>
				<a href="/"><img src="/image/logo.png" width="200px" /></a>
			</div>
			<div style={{ padding: "0 30px", marginTop: "10px", backgroundColor: "#000" }}>
				<div>
					<Watch id={query.get("q")} />
				</div>
			</div>
			<div style={{ padding: "30px" }}>
				<Thumbnails />
			</div>
		</div>
	);
}
