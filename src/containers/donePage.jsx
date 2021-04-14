import axios from "axios";
import React, { useState, useEffect } from "react";
import "./card.css";

const DonePage = () => {
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    fetchDoneTasks();
  });

  const fetchDoneTasks = () => {
    return axios
      .get(
        `https://backend-nodejs-todo.herokuapp.com/api/tasks?isFinished=true`
      )
      .then((res) => {
        setDoneTasks(res.data);
      });
  };

  const onUndoneClick = (id) => {
    axios
      .put(`https://backend-nodejs-todo.herokuapp.com/api/task?id=${id}`, {
        isFinished: false,
      })
      .then(() => {
        fetchDoneTasks();
      });
  };

  const onDelClick = (id) => {
    if (window.confirm("Are you sure you wish to delete this task?"))
      axios
        .delete(`https://backend-nodejs-todo.herokuapp.com/api/task/${id}`)
        .then(() => {
          fetchDoneTasks();
        });
  };

  return (
    <div className="DonePage">
      <h1
        style={{
          fontSize: "48px",
          margin: "0.5rem 0",
        }}
      >
        Done
      </h1>
      <div className="card-container">
        {doneTasks.map((task) => (
          <div className="card">
            <div className="container">
              <div className="info">
                <h4 className="task">{task.TaskName}</h4>
                <p className="time">
                  {new Date(task.time).toLocaleString([], {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                </p>
              </div>
              <div className="btn-group">
                <button
                  title="Mark as Undone"
                  id="unDone"
                  onClick={() => onUndoneClick(task._id)}
                >
                  <i className="fas fa-undo" />
                </button>
                <button
                  title="Delete"
                  id="del"
                  onClick={() => onDelClick(task._id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonePage;
