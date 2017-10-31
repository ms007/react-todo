import React, { Component } from 'react';
import { EmptyState } from '../Common';
import ToDoInput from './ToDoInput/ToDoInput';
import ToDoList from './ToDoList/ToDoList';

class ToDoPage extends Component {
  state = {
    todos: []
  };

  handleAdd = value => {
    if (value) {
      const { todos } = this.state;
      this.setState({ todos: [...todos, value] });
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <ToDoInput onAdd={this.handleAdd} />
        <ToDoList todos={todos} />
        {todos.length === 0 && <EmptyState>Du hast noch keine ToDo's</EmptyState>}
      </div>
    );
  }
}

export default ToDoPage;
