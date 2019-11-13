import React, { useState } from "react";
import Panel from "./Panel";
import ButtonPanel from "./ButtonPanel";
import PanelSwitcher from "./PanelSwitcher";
import "./App.css";


const App = (props) => {

	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	}

	return (
		<div className="app">
			<div className="header">Hello Wilhelmus</div>
			<div className="content">
				<Panel text="Panel van een class" count={count} />
				<ButtonPanel name="Increment" handler={incrementCount} />
				<PanelSwitcher/>
			</div>
		</div>
	);
};

export default App;