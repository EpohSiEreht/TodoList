import React, { Component } from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		// Set initial state
		this.state = {
			input: ''
		}
	}
	render() {
		return (
			<form onSubmit={(e) => {
				e.preventDefault();
				this.props.addTodo(this.state.input.value);
				this.state.input.value = '';
			}}>
				<input className="form-control col-md-12" ref={node => {
					this.state.input = node;
				}} />
			</form>
		);
	}
}

export default TodoForm;