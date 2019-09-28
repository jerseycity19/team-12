import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {


	render(){
		//{can put javascript in here}
		//todo is being passed in as a prop
		return this.props.todos.map((todo) => (
			<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
		));
	}
}

//Proptypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;