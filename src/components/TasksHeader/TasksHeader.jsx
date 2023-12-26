import { SyncOutlined, PlusOutlined } from "@ant-design/icons";

import TasksFilter from "../TasksFIlter/TasksFilter";

import "./TasksHeader.sass";

export default function TasksHeader({
	setFilterPattern,
	addTask,
	resetTasksList,
}) {
	return (
		<div className="tasks-header">
			<h2 className="label">Задачи</h2>
			<TasksFilter setFilterPattern={setFilterPattern} />
			<div className="button-list">
				<button className="add-button" onClick={addTask}>
					<PlusOutlined />
				</button>
				<button className="reset-button" onClick={resetTasksList}>
					<SyncOutlined />
				</button>
			</div>
		</div>
	);
}
