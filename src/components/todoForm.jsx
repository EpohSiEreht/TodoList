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
			<form className="form-inline" onSubmit={this.submitHandler.bind(this)}>
				<input  className="form-control" 
					    value={this.state.input}
					    onChange={this.changeHandler.bind(this)} 
						placeholder="Type in your task"
				/>
				<button className="btn btn-default" type="submit">Add</button>
			</form>
		);
	}
}

export default TodoForm;