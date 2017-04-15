import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Header from "./Header";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}
