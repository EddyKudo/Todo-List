import React from "react";
import PropTypes from "prop-types";

const Tasks = ({ tasks, deleteTask }) => {
	const tasksList = tasks.length ? (
		tasks.map(todo => {
			return (
				<div className="list-group-item w-50 mx-auto " key={todo.id}>
					<div id="taskContent">{todo.content}</div>
					<span
						id="remove"
						onClick={() => {
							deleteTask(todo.id);
						}}
						className="float-right">
						X
					</span>
				</div>
			);
		})
	) : (
		<p className="mx-auto">No tasks, add a task</p>
	);
	return <div className="tasks list-group">{tasksList}</div>;
};
Tasks.propTypes = {
	tasks: PropTypes.array,
	deleteTask: PropTypes.func
};
export default Tasks;
