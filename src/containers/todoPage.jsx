import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../components/todoCard";
// import "./style.css";

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
    axios.delete(`http://localhost:1000/api/task/${id}`).then(() => {
      fetchTodoTasks();
    });
  };

  return (
    <div>
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
          <Card
            onDone={() => onDoneClick(task._id)}
            onEdit={() => onEditClick(task._id)}
            onDel={() => onDelClick(task._id)}
            detail={task}
          />
        ))}
        {/* {todos.map((task) => (
          <li key={task._id}>
            <span>{task.TaskName} </span>
            <span>{task.time}</span>
            <button onClick={() => onDoneClick(task._id, true)}>✔</button>
            <button type="button" onClick={() => onEditClick(task._id)}>
              Edit
            </button>
            <button onClick={() => onDelClick(task._id)}>del</button>
          </li>
        ))} */}
      </div>
    </div>
  );
};

export default TodoPage;
