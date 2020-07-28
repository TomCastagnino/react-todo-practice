import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({task: ''});
    }

    render() {
        return (
            <form  className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo: </label>
                <input
                    onChange={this.handleChange}
                    id='task'
                    name='task'
                    value={this.state.task}
                    placeholder='New Todo'
                    type='text'
                />
                <button>Add TODO</button>
            </form>
        )
    }
    
}

export default NewTodoForm;