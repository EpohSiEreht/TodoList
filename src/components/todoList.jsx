import React, { Component } from 'react';
import Todo from '../components/todo.jsx';

class TodoList extends Component {
	render() {
		// Map through the todos
		const todoNode = this.props.todos.map((todo) => {
			return (
				<Todo todo={todo} key={todo.id} remove={this.props.remove} />
			);
		});
		return (
			<div className="list-group">{todoNode}</div>
		);
	}
}

export default TodoList;