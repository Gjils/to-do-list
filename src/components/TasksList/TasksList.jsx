import { Fragment } from "react";

import TasksListItem from "../TasksListItem/TasksListItem";

import "./TasksList.sass";

export default function TasksList({
	tasks,
	changeContent,
	toggleProp,
	deleteTask,
}) {
	return (
		<div className="tasks-list">
			{tasks.map((task, index) => (
				<Fragment key={task.id}>
					<TasksListItem
						task={task}
						changeContent={changeContent}
						toggleProp={toggleProp}
						deleteTask={deleteTask}
					></TasksListItem>
				</Fragment>
			))}
		</div>
	);
}
