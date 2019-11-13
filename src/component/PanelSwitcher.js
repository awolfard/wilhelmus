import React, {useState} from "react";
import "./PanelSwitcher.css";
import PanelA from "./PanelA";
import PanelB from "./PanelB";
import RestPanel from "./RestPanel";


const PanelSwitcher = (props) => {

	const [panel, setPanel] = useState("PanelA");
	const panels = {
		"PanelA" : PanelA,
		"PanelB" : PanelB,
		"RestPanel" : RestPanel
 	}
	let PanelComponent = panels[panel];

	const handleChange = (event) => {
		if (event.target.value === "PanelA") {
			PanelComponent = PanelA;
		} else {
			PanelComponent = PanelB;
		}
		setPanel(event.target.value);
	}

	return (
		<div className="panel-switcher">
			<select value={panel} onChange={handleChange}>
				<option value="PanelA">Panel A</option>
				<option value="PanelB">Panel B</option>
				<option value="RestPanel">Rest Panel</option>
			</select>

			<PanelComponent/>
		</div>
	);


};

export default PanelSwitcher;