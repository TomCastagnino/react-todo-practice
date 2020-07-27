import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Task: </label>
                    <input
                        onChange={this.handleChange}
                        id='task'
                        name='task'
                        value={this.state.task}
                    />
                </div>
                <button>X</button>
            </form>
        )
    }
    
}

export default NewTodoForm;