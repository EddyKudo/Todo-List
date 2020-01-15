import React, { Component } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

class App extends Component {
	state = {
		tasks: [{ id: 1, content: "Create a Todo List" }]
	};
	deleteTask = id => {
		const tasks = this.state.tasks.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			tasks: tasks
		});
	};
	addTask = task => {
		task.id = Math.random();
		let tasks = [...this.state.tasks, task];
		this.setState({
			tasks: tasks
		});
	};

	render() {
		return (
			<div className="tasksApp">
				<h1 className="text-primary text-center">Tasks</h1>
				<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
				<AddTask addTask={this.addTask} className="mx-auto" />
			</div>
		);
	}
}

export default App;
