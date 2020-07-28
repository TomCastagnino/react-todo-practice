import React, { Component } from 'react';
import './Todo.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            editing: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete(evt) {
        this.props.delete(this.props.id);
    }

    handleEdit(evt) {
        this.setState({editing: !this.state.editing});
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.task);
        this.setState({editing: !this.state.editing});
    }

    handleChange(evt) {
        this.setState({task: evt.target.value});
    }

    handleToggle(evt) {
        this.props.toggleCompletion(this.props.id);
    }

    render() {
        let rndr;
        if (this.state.editing) {
            rndr = (
                <CSSTransition key='editing' timeout={500} classNames='form'>
                  <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                    <input
                      type='text'
                      value={this.state.task}
                      name='task'
                      onChange={this.handleChange}
                    />
                    <button>Save</button>
                  </form>
                </CSSTransition>
              );
        } else {
            rndr = (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
                  <li className='Todo-task' onClick={this.handleToggle}>
                    {this.props.task}
                  </li>
                </CSSTransition>
              );
        }

        return (
            <TransitionGroup
              className={this.props.completed ? "Todo completed" : "Todo"}
            >
              {rndr}
              <div className='Todo-buttons'>
                <button onClick={this.handleEdit}>
                  <i class='fas fa-pen' />
                </button>
                <button onClick={this.handleDelete}>
                  <i class='fas fa-trash' />
                </button>
              </div>
            </TransitionGroup>
          );
    }

}

export default Todo;