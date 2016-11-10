import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<a href="#" className="list-group-item" onClick= {() => { this.props.remove(this.props.todo.id) }}>
				{this.props.todo.text}
			</a>
		);
	}
}

export default Todo;