import React, { useState } from "react";
import "./card.css";

const Card = ({ detail, onSubmit }) => {
  const [task, setTask] = useState([]);
  const [time, setTime] = useState("");

  const currentDate = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = "" + (date.getMonth() + 1);
    var day = "" + date.getDate();

    return year + "-" + month + "-" + day;
  };

  const currentTime = () => {
    const date = new Date();
    var hour = "" + date.getHours;
    var min = "" + date.getMinutes;

    return hour + ":" + min;
  };

  return (
    <div className="container">
      <div className="info">
        <input
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Todo..."
          required
        />
        <br />
        <input
          className="time-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="datetime-local"
          min={currentDate() + "T" + currentTime()}
          required
        />
      </div>
      <div className="btn-group">
        <button
          type="submit"
          title="Save"
          onClick={() => onSubmit(task, time)}
          id="done"
        >
          <i className="fas fa-check" />
        </button>
      </div>
    </div>
  );
};

export default Card;
