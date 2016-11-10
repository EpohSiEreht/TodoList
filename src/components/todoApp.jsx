import React, { Component } from 'react';
import axios from 'axios';
import Title from '../components/title.jsx';
import TodoForm from '../components/todoForm.jsx';
import TodoList from '../components/todoList.jsx';

class TodoApp extends Component {
	constructor(props) {
		// Pass props to parent class
		super(props);
		// Set initial state
		this.state = {
			data: []
		}
		this.apiUrl = 'http://5824991864550212004e19fe.mockapi.io/todo';
	}
	componentDidMount() {
		axios.get(this.apiUrl)
			 .then((res) => {
			 	this.setState({data: res.data});
			 });
	}
	addTodo(val) {
		const todo = {text: val}
		axios.post(this.apiUrl, todo)
		     .then((res) => {
		     	this.state.data.push(res.data);
		     	this.setState({data: this.state.data});
		     });
	}
	handleRemove(id) {
		const remainder = this.state.data.filter((todo) => {
			if (todo.id !== id) return todo;
		});
		axios.delete(this.apiUrl+'/'+id)
		     .then((res) => {
		     	this.setState({data: remainder});
		     });
	}
	render() {
	    return (
	        <div>
	        	<Title todoCount={this.state.data.length} />
	        	<TodoForm addTodo={this.addTodo.bind(this)} />
	        	<TodoList 
	        		todos={this.state.data}
	        		remove={this.handleRemove.bind(this)} 
	        	/>
	        </div>
	    );
	}
}

export default TodoApp;