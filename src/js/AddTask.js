import React, { Component } from "react";
import PropTypes from "prop-types";
class AddTask extends Component {
	state = {
		content: ""
	};

	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state);
		this.setState({
			content: ""
		});
	};
	render() {
		return (
			<div className="w-50 mx-auto p-2">
				<form onSubmit={this.handleSubmit}>
					<label>Add new Task: </label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</div>
		);
	}
}
AddTask.propTypes = {
	addTask: PropTypes.func
};
export default AddTask;
