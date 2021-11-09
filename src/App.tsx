import React, { Component } from "react";
import "./App.css";

export default function App() {
	const NAME = "Nick Robinson";

	function greeting() {
		return <p>Hello, {NAME}!</p>;
	};

	return (
		<div className="App">
			{greeting()}
		</div>
	);
}
