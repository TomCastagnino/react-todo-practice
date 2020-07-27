import React, { Component } from 'react';

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

    render() {
        let rndr;
        if (this.state.editing) {
            rndr = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type='text'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            rndr = (
                <div>
                    <div>
                        <li>{this.props.task}</li>
                    </div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }
        return rndr
    }

}

export default Todo;