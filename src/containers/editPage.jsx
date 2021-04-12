import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./card.css";

const EditPage = () => {
  const [task, setTask] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fecthTasks();
    // console.log(task);
  });

  const fecthTasks = async () => {
    const res = await axios.get(`http://localhost:1000/api/tasks/${id}`);
    setTask(res.data);
  };

  const onSubmit = () => {
    axios.put(`http://localhost:1000/api/task/?id=${id}`, {
      TaskName: taskName,
      isFinished: task.isFinished,
      time: time,
    });
    history.push(`/`);
  };

  return (
    <div className="EditPage">
      <h1
        style={{
          fontSize: "48px",
          margin: "0.5rem 0",
        }}
      >
        Edit
      </h1>
      <div className="card-container">
        <div className="card">
          <div className="container">
            <div className="info">
              <input
                className="task-input"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                type="text"
                placeholder=""
                required
              />
              <br />
              <input
                className="time-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="datetime-local"
                required
              />
            </div>
            <div className="btn-group">
              <button
                type="submit"
                title="Save"
                onClick={() => {
                  if (taskName.length > 0) onSubmit();
                }}
                id="done"
              >
                <i className="fas fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
