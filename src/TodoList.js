import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid'; 

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        let todoTask = todo.task;
        let uid = uuidv4();
        let newTodo = <Todo task={todoTask} key={uid} id={uid} delete={this.deleteTodo} edit={this.editTodo}/>;
        this.setState({
            items: [...this.state.items, newTodo]
        });
    }

    deleteTodo(todoId) {
        let newItems = this.state.items.filter(todo => todo.props.id !== todoId);
        this.setState({
            items: newItems
        });
    }

    editTodo(todoId, newTask) {
        const updatedTodos = this.state.items.map(todo => {
            if(todo.props.id === todoId) {
                let newTodo = <Todo task={newTask} key={todo.props.id} id={todo.props.id} delete={this.deleteTodo} edit={this.editTodo}/>;
                return newTodo;
            }
            return todo;
        });
        this.setState({items: updatedTodos});
    }

    render() {
        return (
            <div>
                <ul>{this.state.items}</ul>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }

}

export default TodoList;