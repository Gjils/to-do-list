import { Fragment } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import TasksListItem from "../TasksListItem/TasksListItem";

import "./TasksList.sass";

export default function TasksList({
	tasks,
	changeContent,
	toggleProp,
	deleteTask,
}) {
	return (
		<Droppable droppableId="0">
			{(provided) => (
				<div
					className="tasks-list"
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{tasks.map((task, index) => (
						<Fragment key={task.id}>
							<TasksListItem
								index={index}
								task={task}
								changeContent={changeContent}
								toggleProp={toggleProp}
								deleteTask={deleteTask}
							></TasksListItem>
						</Fragment>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
}
