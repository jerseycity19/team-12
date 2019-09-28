import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
	getStyle = () => {
		/*
		if(this.props.todo.completed){
			return {
				textDecoration: 'line-through'
			}
		}
		else{
			return {
				textDecoration: 'none'
			}
		}
		*/
		//Use ternary operator 
		//Dynamic styling
		/*
		border: '1px solid green',
		background: '#f4f4f4',
		padding: '10px',
		marginBottom: '20px',
		textDecoration: this.props.todo.completed ? 
		'line-through' : 'none'
		*/
		return {
			background: '#f4f4f4',
			padding: '10px',
		/*	borderBottom: '1px #ccc dotted', */
			border: '2px solid #e5e5e5',
			textDecoration: this.props.todo.completed ? 
			'line-through' : 'none'

		}
	}

	/*
	markComplete = (e) => {
		console.log(this.props);
	}
	*/

	//Double braces for inline c
	ss
	//<div style={{ backgroundColor: '#f4f4f4' }} >
	render(){
		const { id,title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
					{ title }
				</p>
			</div>
		)
	}
}

//Proptypes
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}

/*
const itemStyle = {
	//backgroundColor: '#f4f4f4'
	backgroundColor: '#f4f4f4'
}
*/

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem;