import React, { Component } from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		// Set initial state
		this.state = {
			input: ''
		}
	}
	submitHandler(e) {
		e.preventDefault();
		if (this.state.input !== '') {
			this.props.addTodo(this.state.input);
			this.state.input = '';
		}
	}
	changeHandler(e) {
		this.setState({ input: e.target.value });
	}
	render() {
		return (
			<form onSubmit={this.submitHandler.bind(this)}>
				<input  className="form-control col-md-12" 
					    value={this.state.input}
					    onChange={this.changeHandler.bind(this)} 
						placeholder="Type in your task"
				/>
			</form>
		);
	}
}

export default TodoForm;