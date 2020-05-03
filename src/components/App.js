import React, { Component } from 'react';
import TaskList from './TaskList';
import './App.css';
import AddTask from './AddTask';

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac wreszcie w wiedzmina 3',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      { id: 1, text: "zrobić dobry uczynek", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },]
  }

  doneBtn = (id) => {
    console.log(id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks,
    })
  }

  deleteBtn = (id) => {
    console.log(id)
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(el => el.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    })
  }

  addTask = (text, date, important) => {
    // console.log('task has been added');

    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }

    this.counter++;
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true;
  }

  render() {
    return (
      <div className="App">
        <h2>ToDo</h2>
        <hr />
        <AddTask add={this.addTask} />
        <hr />
        <TaskList tasks={this.state.tasks} change={this.doneBtn} delete={this.deleteBtn} />
      </div>
    );
  }
}

export default App;