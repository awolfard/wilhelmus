import React from "react";
import "./ButtonPanel.css";

const ButtonPanel = (props) => {

	return (
		<div className="buttonpanel">
					<span>Update count: <input value={props.name} type="button" onClick={props.handler}></input></span>
		</div>
	);

};

export default ButtonPanel;