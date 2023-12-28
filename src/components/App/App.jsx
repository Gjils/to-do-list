import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TasksHeader from "../TasksHeader/TasksHeader";
import TasksList from "../TasksList/TasksList";

import "./App.sass";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			filterPattern: () => true,
		};
	}
	changeContent = (id, newContent) => {
		this.setState({
			tasks: this.state.tasks.map((item) => {
				if (item.id == id) {
					return { ...item, content: newContent };
				}
				return item;
			}),
		});
	};
	toggleProp = (id, prop) => {
		this.setState({
			tasks: this.state.tasks.map((item) => {
				if (item.id == id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		});
	};
	deleteTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter((item) => {
				return item.id !== id;
			}),
		});
	};
	addTask = () => {
		const newTask = {
			content: "",
			completed: false,
			important: false,
			id: uuidv4(),
		};
		this.setState({
			tasks: [newTask, ...this.state.tasks],
		});
	};
	resetTasksList = () => {
		this.setState({ tasks: [] });
	};
	setFilterPattern = (filterPattern) => {
		this.setState({ filterPattern });
	};

	onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		if (destination.index === source.index) {
			return;
		}

		const tasks = this.state.tasks;
		const newTasks = [...tasks];
		newTasks.splice(source.index, 1);
		newTasks.splice(
			destination.index,
			0,
			tasks.filter((item) => item.id === draggableId)[0],
		);

		this.setState({ tasks: newTasks });
	};
	render() {
		const { tasks, filterPattern } = this.state;
		const visibleTasks = tasks.filter(filterPattern);
		return (
			<div className="app">
				<DragDropContext onDragEnd={this.onDragEnd}>
					<div className="tasks">
						<TasksHeader
							setFilterPattern={this.setFilterPattern}
							addTask={this.addTask}
							resetTasksList={this.resetTasksList}
						/>
						<TasksList
							tasks={visibleTasks}
							changeContent={this.changeContent}
							toggleProp={this.toggleProp}
							deleteTask={this.deleteTask}
						/>
					</div>
				</DragDropContext>
			</div>
		);
	}
}
