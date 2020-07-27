import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(evt) {
        this.props.delete(this.props.id);
    }

    handleEdit(evt) {
        this.props.edit(this.props.id);
    }

    render() {
        return (
            <div>
                <div>{this.props.task}</div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

}

export default Todo;