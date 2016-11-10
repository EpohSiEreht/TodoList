import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Your List: ({this.props.todoCount})</h1>
				</div>
			</div>
		);
	}
}

export default Title;