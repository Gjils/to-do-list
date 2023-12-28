import { Component } from "react";
import {
	BarsOutlined,
	CheckCircleOutlined,
	ClockCircleOutlined,
	ExclamationCircleOutlined,
} from "@ant-design/icons";

import "./TasksFilter.sass";

export default class TasksFilter extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.filterButtons = [
			{
				label: "all",
				content: (
					<>
						<BarsOutlined />
						Все
					</>
				),
				filterPattern: () => true,
			},
			{
				label: "uncompleted",
				content: (
					<>
						<ClockCircleOutlined />
						Невыполненные
					</>
				),
				filterPattern: (item) => !item.completed,
			},
			{
				label: "completed",
				content: (
					<>
						<CheckCircleOutlined />
						Выполненные
					</>
				),
				filterPattern: (item) => item.completed,
			},
			{
				label: "important",
				content: (
					<>
						<ExclamationCircleOutlined />
						Важные
					</>
				),
				filterPattern: (item) => item.important & !item.completed,
			},
		];
	}
	render() {
		const { setFilterPattern } = this.props;
		const { activeIndex } = this.state;
		return (
			<div className="tasks-filter">
				{this.filterButtons.map(({ content, filterPattern }, index) => (
					<button
						className={`tasks-filter-button ${
							index === activeIndex ? "active" : ""
						}`}
						key={index}
						onClick={(event) => {
							this.setState({ activeIndex: index });
							setFilterPattern(filterPattern);
							event.target.blur();
						}}
					>
						{content}
					</button>
				))}
			</div>
		);
	}
}
