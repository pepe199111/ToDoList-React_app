import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { date, id, text, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <h4>
          <strong style={important ? style : null}>{text}</strong> - do it until :<span style={{ color: "red" }}> {date}</span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </h4>
      </div>
    );
  } else {
    const doneTaskTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <h4>
          <strong>{text}</strong>
          <br />
          <em> - done on :</em><span style={{ color: "green" }}> {doneTaskTime}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </h4>
      </div >
    )
  }
}

export default Task;