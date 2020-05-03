import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    checked: false,
    date: '',
  }

  handleAddTask = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleChangePriority = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleChangeDate = e => {
    this.setState({
      date: e.target.value
    })
  }

  handleSendTask = () => {
    const { text, date, checked } = this.state;

    if (text.length < 3) alert('Your task name is too short!');
    if (date === "") alert('You need to add task deadline');

    const add = this.props.add(text, date, checked);
    if (add) {
      this.setState({
        text: '',
        checked: false,
        date: '',
      })
    }
  }

  render() {
    const { text, checked, date } = this.state;
    return (
      <div className="form">

        <input type="text" placeholder="add task" value={text} onChange={this.handleAddTask} />

        <input type="checkbox" id="important" checked={checked} onChange={this.handleChangePriority} />
        <label htmlFor="important">Priority</label>

        <br />

        <label htmlFor="date">Until when to do</label>
        <input type="date" value={date} onChange={this.handleChangeDate} />

        <br />

        <button onClick={this.handleSendTask}>Add task</button>

      </div>
    )
  }
}

export default AddTask;