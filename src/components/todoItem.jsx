import React, { Component } from 'react';

class TodoItem extends Component {
	clickHandler() {
		this.props.remove(this.props.todo.id);
	}
	render() {
		return (
			<a href="#" className="thumbnail" onClick={this.clickHandler.bind(this)}>
				{this.props.todo.text}
			</a>
		);
	}
}

export default TodoItem;