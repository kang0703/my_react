import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let todoId = 0;

class App extends Component {
	constructor (props) {
		console.log('실행 순서 1');
		super(props)
		this.state = {
			todoItems: [],
			toduInput: ''
		}
		this._handleOnClickAddItem = this._handleOnClickAddItem.bind(this)
		this._handleOnChangeTodoInput = this._handleOnChangeTodoInput.bind(this)
	}

	componentWillMount() {
		console.log('실행 순서 2');
	}

	_handleOnClickAddItem () {
		const { todoInput, todoItems } = this.state
		if (todoInput.length === 0) return alert('내용을 입력해주세요.')
		const todoItem = {
			id: todoId++,
			title: todoInput,
			isCompleted: false
		}
		const newTodoItems = todoItems.slice(0)
		newTodoItems.push(todoItem)
		this.setState({ todoItems: newTodoItems, todoInput: '' })
	}

	_handleOnChangeTodoInput (e) {
		this.setState({ todoInput: e.target.value })
	}

	render() {
		console.log('실행 순서 3');
		return (
			<div className='container' style={{ maxWidth: 600, padding: '20px 0' }}>
				<div className='row'>
					<div className='col text-center'>
						<div className='input-group'>
							<input
							type='text'
							className='form-control'
							placeholder='새로운 할 일을 입력해주세요.'
							value={this.state.todoInput}
							onChange={this._handleOnChangeTodoInput}
							onKeyDown={e => e.keyCode === 13 ? this._handleOnClickAddItem() : null}
							/>
							<div className='input-group-append'>
								<button
									className='btn btn-outline-secondary'
									onClick={this._handleOnClickAddItem}
									>
									등록
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		console.log('실행 순서 4');
	}
}




export default App;
