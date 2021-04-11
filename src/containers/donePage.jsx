import axios from "axios";
import React, { useState, useEffect } from "react";

const DonePage = () => {
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    fetchDoneTasks();
  });

  const fetchDoneTasks = () => {
    return axios
      .get(`http://localhost:1000/api/tasks?isFinished=true`)
      .then((res) => {
        setDoneTasks(res.data);
      });
  };

  const onUndoneClick = (id) => {
    axios
      .put(`http://localhost:1000/api/task?id=${id}`, { isFinished: false })
      .then(() => {
        fetchDoneTasks();
      });
  };

  const onDelClick = (id) => {
    axios.delete(`http://localhost:1000/api/task/${id}`).then(() => {
      fetchDoneTasks();
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
        Done
      </h1>
      <ul>
        {doneTasks.map((task) => (
          <li>
            <span>{task.TaskName}</span>
            <span>{task.time}</span>
            <button onClick={() => onUndoneClick(task._id)}>Undone</button>
            <button onClick={() => onDelClick(task._id)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonePage;
