import React, { Component } from 'react';

import ListItem from './ListItem';

class TodoList extends Component {
	
	addItem (e) {
		e.preventDefault();
	}
	
	render() {
		return (
		<div>	
			<ul>
				<ListItem item="Uno" />
				<ListItem item="Dos" />
				<ListItem item="Tres" />
			</ul>
			<form onSubmit={this.addItem}>
				<p><input type="text" /></p>
				<p><button type="submit">Añadir</button></p>
			</form>
		</div>
		);
	}
}
export default TodoList;
