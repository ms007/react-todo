import React from 'react';
import PropTypes from 'prop-types';

const renderToDo = item => <li>{item}</li>;

const ToDoList = ({ todos }) => {
  return <ul>{todos.map(renderToDo)}</ul>;
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string)
};

ToDoList.defaultProps = {
  todos: []
};

export default ToDoList;
