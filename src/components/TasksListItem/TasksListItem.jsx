import {
	MenuOutlined,
	CheckOutlined,
	WarningOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import { Draggable } from "react-beautiful-dnd";

import "./TasksListItem.sass";

export default function TasksListItem({
	task,
	changeContent,
	toggleProp,
	deleteTask,
	index,
}) {
	const { content, id, completed, important } = task;
	let WrapperClassName = "task-wrapper";
	if (completed) {
		WrapperClassName += " completed";
	} else if (important) {
		WrapperClassName += " important";
	}
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					className={WrapperClassName}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<div className="drag-area">
						<MenuOutlined />
					</div>
					<div className="task">
						<div className="line"></div>
						<textarea
							className="task-content"
							rows={100}
							autoFocus={content == "" ? true : false}
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
			)}
		</Draggable>
	);
}
