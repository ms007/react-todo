import React, { Component } from 'react';
import { Input, Button } from '../../Common';
import './ToDoInput.css';

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    const { onAdd } = this.props;
    const { value } = this.state;
    if (onAdd) {
      onAdd(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div className="ToDoInput">
        <Input
          className="ToDoInput__Input"
          key="input"
          value={value}
          onChange={this.handleChange}
        />
        <Button key="button" label="Erstelle ToDo" onClick={this.handleClick} />
      </div>
    );
  }
}

export default ToDoInput;
