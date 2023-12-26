import {
	MenuOutlined,
	CheckOutlined,
	WarningOutlined,
	CloseOutlined,
} from "@ant-design/icons";

import "./TasksListItem.sass";

export default function TasksListItem({
	task,
	changeContent,
	toggleProp,
	deleteTask,
}) {
	const { content, id, completed, important } = task;
	let WrapperClassName = "task-wrapper";
	if (completed) {
		WrapperClassName += " completed";
	} else if (important) {
		WrapperClassName += " important";
	}
	return (
		<div className={WrapperClassName}>
			<div className="drag-area">
				<MenuOutlined />
			</div>
			<div className="task">
				<div className="line"></div>
				<input
					className="task-content"
					autoFocus={content == "" ? true : false}
					type="text"
					value={content}
					onChange={(event) => {
						changeContent(id, event.target.value);
					}}
					onBlur={(event) => {
						if (event.target.value == "") {
							deleteTask(id);
						}
					}}
				/>
				<div className="button-list">
					<button
						className="complete-button"
						onClick={() => {
							toggleProp(id, "completed");
						}}
					>
						<CheckOutlined />
					</button>
					<button
						disabled={completed ? true : false}
						className="important-button"
						onClick={() => {
							toggleProp(id, "important");
						}}
					>
						<WarningOutlined />
					</button>
					<button
						className="delete-button"
						onClick={() => {
							deleteTask(id);
						}}
					>
						<CloseOutlined />
					</button>
				</div>
			</div>
		</div>
	);
}
