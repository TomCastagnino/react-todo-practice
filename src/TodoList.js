import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid'; 
import './TodoList.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addTodo(todo) {
        let todoTask = todo.task;
        let uid = uuidv4();
        let newTodo = <Todo task={todoTask} key={uid} id={uid} delete={this.deleteTodo} edit={this.editTodo} completed={false} toggleCompletion={this.toggleCompletion}/>;
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
                let newTodo = <Todo task={newTask} key={todo.props.id} id={todo.props.id} delete={this.deleteTodo} edit={this.editTodo} completed={false} toggleCompletion={this.toggleCompletion}/>;
                return newTodo;
            }
            return todo;
        });
        this.setState({items: updatedTodos});
    }

    toggleCompletion(todoId) {
        const updatedTodos = this.state.items.map(todo => {
            if(todo.props.id === todoId) {
                let newTodo = <Todo task={todo.props.task} key={todo.props.id} id={todo.props.id} delete={this.deleteTodo} edit={this.editTodo} completed={!todo.props.completed} toggleCompletion={this.toggleCompletion}/>;
                return newTodo;
            }
            return todo;
        });
        this.setState({items: updatedTodos});
    }

    render() {
        const todos = this.state.items.map(todo => {
            return (
            <CSSTransition key={todo.id} timeout={500} classNames='todo'>
                {todo}
            </CSSTransition>
            );
        });
        return (
            <div className='TodoList'>
              <h1>
                Get To Work! <span>An Animated Todo List Made With React.</span>
              </h1>
              <NewTodoForm addTodo={this.addTodo} />
      
              <ul>
                <TransitionGroup className='todo-list'>{todos}</TransitionGroup>
              </ul>
            </div>
          );
    }

}

export default TodoList;