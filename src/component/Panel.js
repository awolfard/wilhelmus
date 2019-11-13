import React from "react";
import "./Panel.css";

class Panel extends React.Component {

	constructor(props) {
		super(props);

		const now = new Date();
		this.state = {
			updatetime : now
		}
	}

	componentDidMount() {
		console.log('Panel is mounted.');
	}

	componentDidUpdate(previousProps) {
		if (this.props.count != previousProps.count) {
			const now = new Date();
			this.setState({
				updatetime : now
			});
		}
	}

	componentWillUnmount() {
		console.log('Panel did unmount.');
	}

	render() {
	  return <div className="panel">{this.props.text} with count {this.props.count}<div>Updated on: {this.state.updatetime.toISOString()}</div></div>;
	}
  }

export default Panel;