import React from 'react';
import Task from './Task';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ))

  const done = props.tasks.filter(task => !task.active);
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ))

  return (
    <>

      <div className="active">
        <h1>Task to do ({active.length})</h1>
        {activeTasks}
      </div>

      <hr />

      <div className="done">
        <h3>Done task ({done.length})</h3>
        {done.length > 5 && <span style={{ color: "gold" }}>Wyswietlonych jest jedynie 5 ostatnich zadan</span>}
        {doneTasks.slice(0, 5)}
      </div>

    </>
  );
}

export default TaskList;