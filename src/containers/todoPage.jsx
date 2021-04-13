import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./card.css";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchTodoTasks();
  }, []);

  async function fetchTodoTasks() {
    return axios
      .get(`http://localhost:1000/api/tasks?isFinished=false`)
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      });
  }

  const onEditClick = (id) => {
    history.push(`/edit/${id}`);
  };

  const onDoneClick = (id) => {
    axios
      .put(`http://localhost:1000/api/task?id=${id}`, { isFinished: true })
      .then(() => {
        fetchTodoTasks();
      });
  };

  const onDelClick = (id) => {
    if (window.confirm("Are you sure you wish to delete this task?"))
      axios.delete(`http://localhost:1000/api/task/${id}`).then(() => {
        fetchTodoTasks();
      });
  };

  return (
    <div className="TodoPage">
      <h1
        style={{
          fontSize: "48px",
          margin: "0.5rem 0",
        }}
      >
        Todo
      </h1>
      <div className="card-container">
        {todos.map((task) => (
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
                  title="Mark as Done"
                  id="done"
                  onClick={() => onDoneClick(task._id)}
                >
                  <i className="fas fa-check" />
                </button>
                <button
                  title="Edit Task"
                  id="edit"
                  onClick={() => onEditClick(task._id)}
                >
                  <i className="fas fa-pen" />
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

export default TodoPage;
